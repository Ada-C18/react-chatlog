import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

//const chats = chatMessages;

function App() {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedChat) => {
    const entries = chatData.map((entry) => {
      if (entry.id === updatedChat.id) {
        return updatedChat;
      } else {
        return entry;
      }
    });
    setChatData(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>🤍 Chat Log 🤍</h1>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChat={updateChatData} />
      </main>
    </div>
  );
}

export default App;
