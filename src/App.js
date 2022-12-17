import React from 'react';
import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const updateLikedEntry = (updatedEntry) => {
    const likedEntries = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });

    setEntries(likedEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>ChatLog!</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} onUpdateLikedEntry={updateLikedEntry} />
      </main>
    </div>
  );
};

export default App;
