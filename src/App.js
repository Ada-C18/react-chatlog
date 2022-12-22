import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatLogData, setChatLogData] = useState(chatMessages);

  const updateLiked = (id) => {
    const newChatLog = chatLogData.map((chat) => {
      if (chat.id === id) {
        return { ...chat, liked: !chat.liked };
        // console.log(newChat);
      } else {
        return chat;
      }
    });
    setChatLogData(newChatLog);
  };

  const countLikedChats = () => {
    const count = chatLogData.reduce((counter, chat) => {
      return chat.liked ? counter + 1 : counter;
    }, 0);
    return count;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h3>{countLikedChats()} ❤️s</h3>
      </header>
      <main>
        <ChatLog entries={chatLogData} onLike={updateLiked}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
