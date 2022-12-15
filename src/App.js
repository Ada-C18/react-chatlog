import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const toggleLiked = (id) => {
    setChatData((chatData) =>
      chatData.map((chat) => {
        if (id === chat.id) {
          return { ...chat, liked: !chat.liked };
        } else {
          return chat;
        }
      })
    );
  };

  const calTotalLikes = (chatData) => {
    return chatData.reduce((total, chat) => {
      return chat.liked ? total + 1 : total;
    }, 0);
  };

  const totalLikes = calTotalLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2 id="heartWidget" className="widget">
            {totalLikes} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onToggleLiked={toggleLiked} />
      </main>
    </div>
  );
};

export default App;
