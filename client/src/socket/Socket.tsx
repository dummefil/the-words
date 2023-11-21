import { io, Socket } from 'socket.io-client';

interface ClientToServerEvents {
    hello: () => void;
}

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Blob) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

export class SocketClass {
    socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null

    connect(url: URL) {
        if (!this.socket) {
            this.socket = io(url);
        }
    }

    disconnect() {
        if (this.socket) {
            this.socket.close()
            this.socket = null
        }
    }

    send(message: JSON) {
        if (this.socket) {
            this.socket.send(JSON.stringify(message))
        }
    }


}
