import { Server } from 'socket.io';
import {logger} from './logger';

const io = new Server( {
    serveClient: false,
    cors: {
        origin: '*',
        // credentials: true
    },
    connectionStateRecovery: {
        // the backup duration of the sessions and the packets
        maxDisconnectionDuration: 2 * 60 * 1000,
        // whether to skip middlewares upon successful recovery
        skipMiddlewares: true,
    }
});

io.use(async (socket, next) => {
    const base64 = socket.handshake.auth.token;
    const token = base64ToString(base64);
    const [username, password] = token.split(':');
    logger.info(username, password);
    if (username === 'dima' && password === 'password') {
        return next();
    }
    logger.error(`INVALID_USER: ${token}`)
    next(new Error("INVALID_USER"));
});

io.on("connection", socket => {
    logger.info(`connect ${socket.id}`);

    socket.on("disconnect", (reason) => {
        logger.info(`disconnect ${socket.id} due to ${reason}`);
    });
});

const base64ToString = (string: string) => Buffer.from(string, 'base64').toString('ascii')



const port = 3000;
logger.info(`Socket IO started on ${port}`);
io.listen(3000);
