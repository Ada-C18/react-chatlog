import React,{ useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [count, setCount] = useState(0)

  function getData(){
      setCount(count+1);
  };

  return (
    
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon </h1>
        <section>
          <h2>{`${count} ❤️s`}</h2>
        </section>
      </header>
      
      <main>
        <ChatLog entries={chatMessages} data={getData}></ChatLog>
      </main>
    </div>
  );
};



export default App;
