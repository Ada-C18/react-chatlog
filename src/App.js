import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>ChatEntry</h1>
      </header>
     <ChatLog entries={chatMessages}/>
    </div>
  );
};

export default App;
