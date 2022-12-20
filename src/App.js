import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
const App = () => {
  const [chatMessagesData, setChatMessagesData] = useState(chatMessages);

  const onLike = (id) => {
    setChatMessagesData((chatMessagesData) =>
      chatMessagesData.map((message) => {
        if (message.id === id) {
          return { ...message, liked: !message.liked };
        } else {
          return message;
        }
      })
    );
  };
  const calcTotalLikes = (chatMessagesData) => {
    return chatMessagesData.reduce((total, message) => {
      return message.liked ? (total += 1) : total;
    }, 0);
  };
  const totalLikeTally = calcTotalLikes(chatMessagesData);
  console.log(totalLikeTally);
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <h2>{totalLikeTally} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessagesData} onLike={onLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
