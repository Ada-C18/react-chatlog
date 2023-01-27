import React, { useEffect, useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  const likeCount = chatMessages.reduce((a, obj) => {
    return a + obj.liked;
  }, 0);

  const updateLikes = () => {
    return 0;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{likeCount}'❤️'s</h2>
      </header>
      <main>
        {
          <ChatLog
            entries={chatMessages}
            likeCount={likeCount}
            updateLikes={updateLikes}
          ></ChatLog>
        }
      </main>
    </div>
  );
};

export default App;
