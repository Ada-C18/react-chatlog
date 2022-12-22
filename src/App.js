import React, { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';



const App = () => {

  const [entries, setEntries] = useState(chatMessages)
  const toggleLike = (id) => {
    setEntries(prevEntries => {
      const newEntries = prevEntries.map(entry => {
        return entry.id === id ? { ...entry, liked: !entry.liked } : entry
      })
      return newEntries
    })
  }

  const calculateLikes = () => {
    let total = 0
    for (let entry of entries) {
      if (entry.liked === true) {
        total += 1
      }
    }
    return total
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2> {calculateLikes()} ❤️s </h2>
      </header>

      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entries} toggleLike={toggleLike} />

      </main>

    </div>
  );
};


export default App;
