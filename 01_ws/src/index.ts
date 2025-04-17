import { CLOSING, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", (socket) => {
    console.log("Connection established!");
    socket.send("Hello World");
    setInterval(() => {
        socket.send("Current price of Solana is: " + Math.random());
    }, 2000);
})