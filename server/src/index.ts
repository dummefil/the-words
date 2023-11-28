import {Server} from 'socket.io';
import {logger} from './logger';
import {ROOM_ANSWER, ROOM_CONFIRM, ROOM_STATE, SERVERS_CONNECT, SERVERS_LOAD} from "../../events";
import {base64ToString} from "./decoder";
import {Player} from "./player";
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
    logger.info(username, password);
    players.push(new Player(username, socket.id))
    // if (username === 'dima' && password === 'password') {
        return next();
    // }
    // logger.error(`INVALID_USER: ${token}`)
    // next(new Error("INVALID_USER"));
});

// mode - normal, fast, solo

const list  = [
    {
        "id": "b3bf1256-746e-4722-b1ef-30c3482b9f8c",
        "name": "Kristin",
        "lang": "ru",
        "mode": [
            "normal"
        ]
    },
    {
        "id": "4bf2f1a5-bdaf-4339-b4c6-9e7699b3db19",
        "name": "Lott",
        "lang": "ru",
        "mode": [
            "normal"
        ]
    },
    {
        "id": "692313e3-560c-4cea-a73c-8960d2b7c02d",
        "name": "Lorie",
        "lang": "ru",
        "mode": [
            "normal"
        ]
    },
    {
        "id": "6a1ae72e-ebc2-434c-83d9-ac5d5f376d44",
        "name": "Dawn",
        "lang": "ru",
        "mode": [
            "normal"
        ]
    },
    {
        "id": "0d2853d1-26cb-4668-9a66-48d3961a72ff",
        "name": "Mattie",
        "lang": "ru",
        "mode": [
            "normal"
        ]
    }
]

const rooms = list.map(({id}) => id);

const calculatePlayers = async () => {
    return await io.in(`room-id`).fetchSockets()
}


io.on("connection", socket => {
    const player = players.find(({socketId}) => socket.id === socketId);
    const room = new Room()
    let word;
    logger.info(`Connected ${socket.id}`);

    socket.emit(SERVERS_LOAD, list)
    socket.on(SERVERS_CONNECT, (serverId, ack) => {
        if (rooms.indexOf(serverId) > -1) {
            const server = list.find(s=> s.id === serverId)
            socket.join(serverId);
            ack(server)
        }
    })

    socket.on(ROOM_ANSWER, ({ serverId, answer }) => {
        word = answer;
        socket.to(serverId).emit(ROOM_STATE, 'validation');
    })

    socket.on(ROOM_CONFIRM, () => {
        //todo calculate answers
        socket.send(ROOM_STATE, () => {})
    })

    socket.on("disconnect", (reason) => {
        player?.onDisconnect();
        logger.info(`disconnect ${socket.id} due to ${reason}`);
    });
});

const port = 3000;
logger.info(`Socket IO started on ${port}`);
io.listen(3000);
