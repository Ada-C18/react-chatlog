import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import HeaderLikeCounter from './components/HeaderLikeCounter';

const App = () => {
  const [entries, setStatus] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);

  const toggleheart = (id) => {
    const newEntries = [];
    let likes = 0;
    for (const entry of entries) {
      if (entry.id === id) {
        entry.liked = !entry.liked;
      }
      if (entry.liked) {
        likes += 1;
      }
      newEntries.push(entry);
    }
    setLikeCount(likes);
    setStatus(newEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <HeaderLikeCounter likeCount={likeCount} />
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entries} toggleheart={toggleheart} />
        {/* <ChatEntry/> */}
      </main>
    </div>
  );
};

export default App;
