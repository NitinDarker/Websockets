import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8000 });

function sendMessage(socket: WebSocket, broadcast: string) {
  for (let s of socketList) {
    s.send(broadcast);
  }
}

let socketList: WebSocket[] = [];

wss.on("connection", (socket) => {
  console.log("A connection is established!");
  socketList.push(socket);
  socket.send("From Server: Hey there!");

  socket.on("message", (event) => {
    console.log("Response: " + event.toString());
    sendMessage(socket, event.toString());
  });

  socket.on("close", () => {
    console.log("A Connection is lost!");
    socketList = socketList.filter((s) => {
      return s != socket;
    });
  });
});
