import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const calcTotalLikes = (entries) => {
    return entries.reduce((total, entry) => {
      return entry.liked ? total + 1 : total;
    }, 0)
  };

  const totalLikes = calcTotalLikes(entries);

  const updateLike = id => {
    const newEntries = entries.map(entry => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    });

    setEntries(newEntries);
  };

  return (
    <div id='App'>
      <header>
        <h1>Waiting For Godot</h1>
        <h3>(to reply...)</h3>
        <section>
          <h1 id='heartWidget'>{totalLikes} ❤️s</h1>
        </section>
      </header>
      <main>
        <ChatLog 
          entries={entries} 
          updateLike={updateLike} />
      </main>
    </div>
  );
};

export default App;
