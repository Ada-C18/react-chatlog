import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry.js';
import ChatLog from './components/ChatLog.js';



const App = () => {
const [likesCount, setLikesCount] = useState(0);
const updateLikes = (isLike) => {
  if (isLike) {
  setLikesCount(likesCount + 1);
  } else {
    setLikesCount(likesCount - 1)
  }
}


  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{likesCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateLikes={updateLikes}/>
      </main>
    </div>
  );
};

export default App;
