import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>();
  const [broadcast, setBroadcast] = useState<string>("");
  const broadcastRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const ws: WebSocket = new WebSocket("ws://10.50.3.90:8000");
    setSocket(ws);
    ws.onopen = () => {
      console.log("A Connection to server is established!");
      ws.send("From Client: Greetings!");
    };

    ws.onmessage = (event) => {
      console.log("From Server: " + event.data);
      setBroadcast((msg) => {
        return event.data + "\n" + msg;
      });
    };
  }, []);

  function communicate() {
    if (broadcastRef.current) {
      socket?.send(broadcastRef.current.value);
    }
  }

  return (
    <>
      <input
        ref={broadcastRef}
        placeholder="Enter a message"
        type="text"
      ></input>
      <button onClick={communicate}>Send</button>
      <pre id="broadcastBox">{broadcast}</pre>
    </>
  );
}

export default App;

