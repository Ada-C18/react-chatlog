import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likes, setLikes] = useState(0);

  const heartClick = (id) => {
    let currLikes = 0;
    const newEntries = entries.map((entry) => {
      const newEntry = { ...entry };
      if (newEntry.id === id) {
        newEntry.liked = !newEntry.liked;
      }
      if (newEntry.liked === true) {
        currLikes += 1;
      }
      return newEntry;
    });
    setEntries(newEntries);
    setLikes(currLikes);
  };

  return (
    <div id="App">
      <header>
        <h1>Robot v. Robot feat. Vladimir and Estragon 🤖</h1>
        <h2>{likes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} heartClickCallback={heartClick} />
      </main>
    </div>
  );
};

export default App;
