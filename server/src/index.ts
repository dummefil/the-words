import Fastify from 'fastify';
import SocketIO from 'fastify-socket.io';
import {logger, config} from './logger';
import bcrypt from 'bcrypt'

interface IQuerystring {
    username: string;
    password: string;
}

interface IHeaders {
    'h-Custom': string;
}

interface IReply {
    200: { success: boolean };
    302: { url: string };
    '4xx': { error: string };
}

const fastify = Fastify({
    logger: config ?? true
});

fastify.register(SocketIO, {
    // put your options here
});

fastify.get<{
    Querystring: IQuerystring,
    Headers: IHeaders,
    Reply: IReply
}>('/authorize',
    // {
    //     preValidation: (request, reply, done) => {
    //         const {username, password} = request.query
    //         done(username !== 'admin' ? new Error('Must be admin') : undefined) // only validate `admin` account
    //     }
    // },
    async (request, reply) => {
    //tood
    const { username, password } = request.query;
    const saltRounds = 10
    const hashPassword = await bcrypt.hash(password, saltRounds);

    logger.info(username, password, hashPassword, await bcrypt.compare(password, hashPassword));
    reply.code(200).send({ success: true });
})

fastify.get("/", (req, reply) => {
    fastify.io.emit("hello");
});

fastify.listen({ port: 3000 }).catch((error: Error) => {
    logger.error(error);
})
