import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);

  const onLike = (id) => {
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

  const calcTotalLikes = (messageData) => {
    return messageData.reduce((total, message) => {
      return total + message.liked;
    }, 0);
  };

  const totalLikes = calcTotalLikes(messageData);

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <h2>{totalLikes} ❤️s </h2>
        <ChatLog entries={messageData} onLike={onLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
