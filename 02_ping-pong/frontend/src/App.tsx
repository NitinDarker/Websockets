import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>();
  const [message, setMessage] = useState('');

  function sendMessage() {
    if (!socket) {
        return "No connection is established!";
    }
    socket.send(message);
    console.log(message);
  }

  useEffect(() => {
    const wss = new WebSocket('ws://localhost:8000');
    setSocket(wss);

    wss.onmessage = (event) => {
        console.log(event.data);
        alert(event.data);
    }
  }, []);

  return (
    <>
        <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder='Ping...'></input>
        <button onClick={sendMessage}>Send</button>
    </>
  );
}

export default App
