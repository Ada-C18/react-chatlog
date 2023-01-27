import React, { useEffect, useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (id) => {
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

  const likeCounts = chatData.reduce((a, obj) => (obj.liked ? a + 1 : a), 0);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{`${likeCounts} ❤️'s`}</h2>
      </header>
      <main>
        {
          <ChatLog
            entries={chatMessages}
            updateChatData={updateChatData}
          ></ChatLog>
        }
      </main>
    </div>
  );
};

export default App;
