import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/chatLog';
import { useState } from 'react';

const App = () => {
  const [likesCount, setLikesCount] = useState(0);
  const updateLikes = (isLike) => {
    if (isLike) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }
  };

  // (prevLikeCount) => prevLikeCount + 1

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{likesCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
