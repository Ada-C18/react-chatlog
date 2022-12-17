import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>ChatEntry</h1>
      </header>
      <main> {chatMessages.map((data)=>{
        return <ChatEntry 
        sender={data.sender}
         body ={data.body} 
         timeStamp={data.timeStamp}
         key={data.id}/>
      }) 
         };
      </main>
    </div>
  );
};

export default App;
