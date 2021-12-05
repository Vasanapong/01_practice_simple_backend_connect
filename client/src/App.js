import './App.css';
import { useState } from 'react'

function App() {

  const [serverData, setServerData] = useState(null)

  const showServerSide = () =>{
    fetch('http://localhost:3001/greeting')
    .then(res=>res.json())
    .then(data=>setServerData(data))
  }

  return (
    <div className="App">
      {serverData ? <h1>{serverData}</h1> : <h1>Welcome to React Client Side</h1>}
      <button onClick={showServerSide}>Click to view Server Side Text</button>
    </div>
  );
}

export default App;
