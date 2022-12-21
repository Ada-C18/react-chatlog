import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const calcTotalLikes = () => {
    return entries.reduce((total, entry) => {
      return entry.liked ? total + 1 : total;
    }, 0);
  };

  const updateLike = (id) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    });
    setEntries(newEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2> {calcTotalLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateLike={updateLike} />
      </main>
    </div>
  );
};

export default App;
