import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const chatDataList = chatMessages

const App = () => {
  const [chatData, setChatData] = useState(chatDataList);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatData} />
      </main>
    </div>
  );
};

export default App;

