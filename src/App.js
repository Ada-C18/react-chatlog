import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const toggleHeart = (id) => {
    setChatData(
      chatData.map((chatEntry) =>
        chatEntry.id === id
          ? { ...chatEntry, liked: !chatEntry.liked }
          : chatEntry
      )
    );
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
        <h1>Chat Between Vladimir and Estragon</h1>
        <div>
          <h2>{getLikeCount()} ❤️s</h2>
        </div>
      </header>

      <main>
        <ChatLog entries={chatData} onLikeMessage={toggleHeart} />
      </main>
    </div>
  );
};

export default App;
