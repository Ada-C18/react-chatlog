import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import React, { useState } from 'react';

const App = () => {
  const [likesCount, setLikesCount]= useState(0);
  
  const updateLikes = (isLike) => {
    if (isLike) {
      setLikesCount(likesCount +1);
      // setIsLiked(true)
    } else {
      setLikesCount(likesCount -1);
      // setIsLiked(false)
    }
    
  }
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2> {likesCount} ❤️s </h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateLikes={updateLikes}/>
      </main>
    </div>
  );
};

export default App;
