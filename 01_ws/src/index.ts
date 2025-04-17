import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 });

// On WebSocket connection, call this function
wss.on("connection", (socket) => {
    console.log("Connection established!");
    socket.send("Hello World");
    
    setInterval(() => {
        socket.send("Current price of Solana is: " + Math.random());
    }, 2000);
    
    socket.on("message", (e) => {
        console.log(e.toString());
    })

})
