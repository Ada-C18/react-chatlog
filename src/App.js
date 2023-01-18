import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry.js';
import ChatLog from './components/ChatLog.js';
import TimeStamp from './components/TimeStamp.js';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import messages from './data/messages.json';

const App = () => {
  const [chatJson, setchatJson] = useState(chatMessages);

  const updatechatJson = (id) => {
    const updatedChat = chatJson.map((chat) => {
      if (chat.id === id) {
        return { ...chat, liked: !chat.liked };
      } else {
        return chat;
      }
    });
    setchatJson(updatedChat);
  };

  const Hearts = () => {
    return chatJson.reduce((total, message) => {
      return message.liked ? total + 1 : total;
    }, 0);
  };

  return (
    <div id="App">
      <header>
        <h1>Human & Robot</h1>
        <h2 className="like">LikeCount: {Hearts()} ❤️</h2>
      </header>
      <main>
        <ChatLog entries={chatJson} setchatJson={updatechatJson}></ChatLog>
      </main>
    </div>
  );
};
export default App;
