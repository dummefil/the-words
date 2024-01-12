import {Server} from 'socket.io';
import {logger} from './logger';
import {base64ToString} from "./decoder";
import {Player} from "./player";
import {randomUUID} from "node:crypto";
import {Room} from "./room";

const io = new Server( {
    serveClient: false,
    cors: {
        origin: '*',
        // credentials: true
    },
    connectionStateRecovery: {
        maxDisconnectionDuration: 2 * 60 * 1000,
        skipMiddlewares: true,
    }
});

const players: Player[] = [];

io.use(async (socket, next) => {
    const base64 = socket.handshake.auth.token;
    const token = base64ToString(base64);
    const [username, password] = token.split(':');
    players.push(new Player(username, socket.id))
    // if (username === 'dima' && password === 'password') {
        return next();
    // }
    // logger.error(`INVALID_USER: ${token}`)
    // next(new Error("INVALID_USER"));
});

// mode - normal, fast, solo


const serverId = randomUUID();
const room = new Room(serverId, 'Люблю Женю');

const rooms: Room[] = [];
rooms.push(room);

io.on(SOCKET.CONNECTION, socket => {
    const room = rooms[0];
    const player = players.find(({socketId}) => socket.id === socketId);
    if (!player) {
        //todo disconnect
        return;
    }

    logger.info(`Connected socket: ${socket.id}, UUID: ${player.id}, name: ${player.username}`);
    socket.emit(SOCKET_SERVER.LOAD, rooms);
    socket.on(SOCKET_SERVER.CONNECT, (serverId, ack) => {
        room.join(player.id);
        ack(room)
    })

    socket.on(SOCKET_ROOM.ANSWER, ({ serverId, answer }) => {
        if (room.state === ROOM_STATE.VALIDATION) {
            room.state = ROOM_STATE.ANSWER;
            room.answer = answer;

            //todo update player turn
            // todo propagate update to all clients
            //todo validate if word in history, add ignore list for last letter but check last letter first then previous
        }
        if (room.state === ROOM_STATE.ANSWER) {
            room.state = ROOM_STATE.VALIDATION;
        }
        socket.to(serverId).emit(SOCKET_ROOM.STATE, room.state);
    })

    socket.on(SOCKET_ROOM.CONFIRM, () => {
        // todo calculate answers
        // socket.send(SOCKET_ROOM., () => {})
    })

    socket.on(SOCKET.DISCONNECT, (reason) => {
        room.leave(player.id);
        console.info(room);
        logger.info(`Leaved room UUID: ${room.id}, name: ${room.name}`);
        logger.info(`Disconnected socket: ${socket.id}, UUID: ${player.id}, name: ${player.username} for reason: ${reason}`);
    });
});

const port = 3000;
logger.info(`Socket IO started on ${port}`);
io.listen(port);
