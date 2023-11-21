import pino from 'pino';

const environment = process.env.NODE_ENV || 'development' ;

const envToLogger: {[index: string]: any} = {
    development: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        },
    },
    production: true,
    test: false,
}

export const config = envToLogger[environment];

export const logger = pino();
