import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  
  const [entries, setEntries] = useState(chatMessages)
  
  const toggleLike = (id) => {
  
    setEntries(prevEntries => {
  
      const newEntries = prevEntries.map(entry => {
        return entry.id === id ? {...entry, liked:!entry.liked} : entry
      })
        return newEntries
    })
  }; 
  
  const totalHearts=() => {
    let total = 0
    for (let entry of entries) {
      if (entry.liked === true) total += 1  
    };
    return total  
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir & Estragon</h1>
        <h2>{totalHearts()} ❤️s </h2>
      </header>
      <main>
      <ChatLog toggleLike={toggleLike} entries={entries}/>
      </main>
    </div>
  );
};

export default App;
