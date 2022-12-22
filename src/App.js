import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

// {
//   id: 1,
//   sender: 'Vladimir',
//   body: 'why are you arguing with me',
//   timeStamp: '2018-05-29T22:49:06+00:00',
//   liked: false,
// }

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const toggleLiked = (id) => {
    setChatData((chatData) =>
      chatData.map((entry) => {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      })
    );
  };

  const calcTotalHearts = (chatData) => {
    return chatData.reduce((total, entry) => {
      return entry.liked ? (total += 1) : total;
    }, 0);
  };

  const activeHeartTally = calcTotalHearts(chatData);

  return (
    <div id="App">
      <header>
        <h1>I, Absurdist Chatbot</h1>
        <p>Spreading the love: {activeHeartTally} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={chatData} onPressHeart={toggleLiked} />
      </main>
    </div>
  );
};

export default App;
