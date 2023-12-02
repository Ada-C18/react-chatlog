import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import React, { useState } from 'react';

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
    <h1>Chat Log</h1>
    <h2> {totalLikes} ❤️s </h2>
  </header>
  <main>
    <ChatLog entries={entries} onLikeEntry={likeEntry}/>
  </main>
</div>
);
};

export default App;

