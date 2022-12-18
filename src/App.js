import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);

  const calcTotalLikes = (messageData) => {
    return messageData.reduce((total, message) => {
      return total + message.liked;
    }, 0);
  };

  const totalLikes = calcTotalLikes(messageData);

  const like = (id) => {
    setMessageData((messageData) =>
      messageData.map((message) => {
        if (message.id === id) {
          return { ...message, liked: !message.liked };
        } else {
          return message;
        }
      })
    );
  };
  return (
    <div id="App">
      <header>
        <h1>🗣 chat log 🗣</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={messageData} onLike={like} />
      </main>
    </div>
  );
};

export default App;
