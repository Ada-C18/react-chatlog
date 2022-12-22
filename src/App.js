import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const toggleLikeButton = (id) => {
    setChatData((chatData) =>
      chatData.map((chat) => {
        if (chat.id === id) {
          return { ...chat, liked: !chat.liked };
        } else {
          return chat;
        }
      })
    );
  };

  const calcTotalLikes = (chatData) => {
    return chatData.reduce((total, current) => {
      return total + current.liked;
    }, 0);
  };

  const displayTotalLiked = calcTotalLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{displayTotalLiked} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatData} onToggleLiked={toggleLikeButton} />
      </main>
    </div>
  );
};

export default App;
