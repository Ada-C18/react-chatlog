import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const likeEntry = (id) => {
    setEntries((entries) => {
      return entries.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            liked: !entry.liked,
          };
        } else {
          return entry;
        }
      });
    });
  };

  const calcTotalLikes = (entries) => {
    return entries.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const totalLikes = calcTotalLikes(entries);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <div>{totalLikes} ❤️s</div>
        <ChatLog entries={entries} onLikeEntry={likeEntry} />
      </main>
    </div>
  );
};

export default App;
