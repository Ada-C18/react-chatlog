import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likedCounts, setLikedCounts] = useState(0); // state var. likedCounts = 0

  const likeFunc = (liked) => {
    if (liked) {
      setLikedCounts(likedCounts + 1);
    } else {
      setLikedCounts(likedCounts - 1);
    }  
  };

  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} likeFunc={likeFunc} />
        <p>{likedCounts} 💓 </p>
      </main>
    </div>
  );
};

export default App;
