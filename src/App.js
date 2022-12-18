import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedChatEntry) => {
    const chatEntries = chatData.map((chatEntry) => {
      if (chatEntry.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return chatEntry;
      }
    });
    setChatData(chatEntries);
  };

  const getLikeCount = () => {
    let likeCount = 0;
    for (const entry of chatData) {
      if (entry.liked === true) {
        likeCount += 1;
      }
    }
    return likeCount;
  };

  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon's Chat</h1>
        <div>
          <h2>{getLikeCount()} ❤️s</h2>
        </div>
      </header>

      <main>
        <ChatLog entries={chatData} onLike={updateChatData} />
      </main>
    </div>
  );
};

export default App;
