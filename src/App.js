import React,{ useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';



const App = () => {
  // const message = chatMessages[0]
  const [count, setCount] = useState(0)



  function getData(){
    setCount(count +1)

  }

  return (
    
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon </h1>
        <h2>{`${count}❤️s`}</h2>
      </header>
      
      
      <main>
      
        <ChatLog entries={chatMessages} data={getData}></ChatLog>

      </main>
    </div>
  );
};



export default App;
