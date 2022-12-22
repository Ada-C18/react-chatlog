import { useState } from 'react';
import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const initialCopy = chatMessages.map((entry) => {
    return { ...entry };
  });

  const [entryList, setEntriesList] = useState(initialCopy);

  const updateLikes = (entryId) => {
    const newEntriesList = [];
    for (const entry of entryList) {
      if (entry.id !== entryId) {
        newEntriesList.push(entry);
      } else {
        const newEntry = {
          ...entry,
          liked: !entry.liked,
        };
        newEntriesList.push(newEntry);
      }
      setEntriesList(newEntriesList);
    }
  };
  const likeCount = () => {
    return entryList.reduce((accumulator, count) => {
      return count.liked ? accumulator + 1 : accumulator;
    }, 0);
  };

  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon messages</h1>
        <h2> {likeCount()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entryList} updateLikes={updateLikes} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
