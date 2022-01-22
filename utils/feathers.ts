import io from "socket.io-client";
import feathers, { Application } from "@feathersjs/feathers";
import socketio from "@feathersjs/socketio-client";

const socket: SocketIOClient.Socket = io("https://my-feels-api.herokuapp.com/");
const feathersClient: Application<any> = feathers();

feathersClient.configure(socketio(socket));

export default feathersClient;
