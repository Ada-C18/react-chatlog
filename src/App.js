import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const updateLike = () => {
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
        <h1>Chat with Estragon and Vladimir</h1>
        <div> {updateLike()}❤️s</div>
      </header>
      <main>
        <ChatLog entries={entries} toggleHeartCallback={toggleHeart} />
      </main>
    </div>
  );
};

export default App;
