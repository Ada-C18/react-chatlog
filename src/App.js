import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // console.log('the value of chatMessages is', chatMessages);
  // do I need to make a copy of chatMessages here?

  const [entryData, setEntryData] = useState(chatMessages);
  const [likesCount, setLikesCount] = useState(0);

  
  const updateEntry = (entryToUpdate) => {
    const entries = entryData.map((entry) => {
      if (entry.id === entryToUpdate.id) {
        return entryToUpdate;
      }
      return entry;
    });
    setEntryData(entries);
  };

  //need function to count hearts
  const countLikes = () => {
    for (const entry of entryData) {
      if (entry.liked) {
        setLikesCount(likesCount +=1);
      }
    } return likesCount
  }

  //add heart count in the JSX below?

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section> Future Counts: {} </section>
      </header>
      <main>
        <ChatLog entries={entryData} onUpdateEntry={updateEntry} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
