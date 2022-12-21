import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const calcTotalLikes = () => {
    let likeCount = 0;

    for (const entry of entries) {
      if (entry.liked === true) {
        likeCount += 1;
      }
    }
    return likeCount;
  };

  const toggleHeart = (id) => {
    const newEntries = [];

    for (const entry of entries) {
      const newEntry = { ...entry };
      if (newEntry.id === id) {
        newEntry.liked = !newEntry.liked;
      }
      newEntries.push(newEntry);
    }
    setEntries(newEntries);
  };

  return (
    <div id="App">
      <header>
        <h1> Chat Log </h1>
        <div> {calcTotalLikes()} ❤️s</div>
      </header>
      <main>
        <ChatLog entries={entries} toggleHeartCallback={toggleHeart} />
      </main>
    </div>
  );
};

export default App;
