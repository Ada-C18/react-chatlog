import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // console.log('the value of chatMessages is', chatMessages);

  const chatMessagesCopy = chatMessages.map((entry) => {
    return { ...entry };
  });

  const [entryData, setEntryData] = useState(chatMessagesCopy);
  const [likesCount, setLikesCount] = useState(0);

  const updateEntry = (entryToUpdate) => {
    const entries = entryData.map((entry) => {
      if (entry.id === entryToUpdate.id) {
        return entryToUpdate;
      }
      return entry;
    });
    setEntryData(entries);
    countLikes(entryToUpdate.liked);
  };

  // Helper function that counts hearts (it's being called above in updateEntry)
  const countLikes = (entry) => {
    if (!entry.liked) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vlad & Estra</h1>
        <section> {likesCount} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={entryData} updateEntry={updateEntry} />
      </main>
    </div>
  );
};

export default App;
