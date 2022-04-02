import io from "socket.io-client";
import feathers, { Application, Service } from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";
import auth from "@feathersjs/authentication-client";

interface IFeathersClient {
  notes: Service<any>;
  users: Service<any>;
}

const socket: SocketIOClient.Socket = io(process.env.NEXT_PUBLIC_FEATHERS_HOST || "");
const feathersClient: Application<IFeathersClient> = feathers();

feathersClient.configure(auth());
feathersClient.configure(
  socketio(socket, {
    timeout: 10000,
  })
);

export default feathersClient;
