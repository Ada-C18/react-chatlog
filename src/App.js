import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import { useState } from 'react'
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages)

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog 
          chatData = {chatData}
        />
      </main>
    </div>
  );
};

export default App;
