import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const calculateTotalLikes = (chatData) => {
    return chatData.reduce((total, entry) => {
      if (entry.liked) {
        total += 1
      }
      return total;
    }, 0)
  };

  const totalLikeCount = calculateTotalLikes(chatData);

  const updateChatData = (updatedChatData) => {
    const entries = chatData.map(entry => {
      if (entry.id === updatedChatData.id) {
        return updatedChatData
      } else {
        return entry
      };
    });
    setChatData(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <div>Total Likes: {totalLikeCount} ❤️s</div>
      </header>
      <main>
          <ChatLog entries={chatData} onUpdateChatData={updateChatData} />
      </main>
    </div>
  );
};

export default App;
