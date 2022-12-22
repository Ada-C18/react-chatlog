import React, { useState } from 'react';
import './App.css';
//import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const entries = chatMessages;
  const entriesCopy = chatMessages.map((entry) => {
    return { ...entry };
  });

  const [entries, setEntries] = useState(entriesCopy);

  const updateEntries = (updatedEntry) => {
    // takes in an updated task
    const updatedEntries = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setEntries(updatedEntries);
    console.log(updatedEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>Aly's Chatbot</h1>
      </header>
      <main>
        <ChatLog entries={entries} updateEntries={updateEntries} />
      </main>
    </div>
  );
};

export default App;
