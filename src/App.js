import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {

  const [entries, setEntries] = useState(chatMessages);

  const toggleLike = (id) => {
      setEntries(prevEntries => {
        const newEntries = prevEntries.map((entry) => {
          return entry.id === id ? {...entry, liked:!entry.liked} : entry;
        })
        return newEntries;
      });
    };

  const totalHearts = () => {
    let total = 0;
    for (let entry of entries) {
      if (entry.liked === true) {
        total += 1;
      }
    }
    return total;
  }


  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon </h1>
        <section>
          <h2>{totalHearts()} ❤️s</h2>
        </section>
      </header>
      
      <main>
        <ChatLog entries={entries} toggleLike={toggleLike}></ChatLog>
      </main>
    </div>
  );
};



export default App;
