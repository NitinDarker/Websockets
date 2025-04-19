import { useEffect } from 'react'
import './App.css'

function App() {

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8000");
        console.log(ws);
    }, []); 

  return (
    <>
      
    </>
  )
}

export default App