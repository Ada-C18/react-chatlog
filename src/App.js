import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, changeEntries] = useState(chatMessages);

  const likeMessage = (id) => {
    changeEntries((entries) =>
      entries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      })
    );
  };

  const sumOfHearts = (entries) => {
    console.log('the number of hearts changed');
    return entries.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const hearts = sumOfHearts(entries);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section className="heartWidget">{hearts} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={entries} likeMessage={likeMessage}></ChatLog>
      </main>
    </div>
  );
};

export default App;
