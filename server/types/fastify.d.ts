import fastifySocketIO from "fastify-socket.io";

declare module 'fastify' {
    export interface FastifyInstance {
        io: fastifySocketIO;
    }
}
