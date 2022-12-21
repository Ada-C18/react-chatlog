import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatdata] = useState(chatMessages);
  const liked = (id) => {
    setChatdata((chatData) =>
      chatData.map((text) => {
        if (text.id === id) {
          return { ...text, liked: !text.liked };
        } else {
          return text;
        }
      })
    );
  };

  const countLikedMessages = () => {
    return chatData.reduce((total, text) => {
      return text.liked ? total + 1 : total;
    }, 0);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h1>Chat Bot</h1>
        <h2>{countLikedMessages()} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatData} onLiked={liked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
