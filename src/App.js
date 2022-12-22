import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

let totalLikes = 0;

  const updateLikes = (chatData) => {
    let likes = 0;
    for (const chat of chatData) {
      if (chat.liked) {
        likes += 1;
      } 
    }
    totalLikes = likes;
  };

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const updateChatData = (updatedChat) => {
    const entries = chatData.map((newChat) => {
      if (newChat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return newChat;
      }
    });
    setChatData(entries);
    updateLikes(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section className="header section">
        <h2 id="heartWidget" className="widget">{totalLikes} ❤️s</h2>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChat={updateChatData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
