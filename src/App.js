import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const intitialCopy = chatMessages.map((message) => {
    return { ...message };
  });
  const [messagesList, setMessagesList] = useState(intitialCopy);

  const updateLike = (entryId) => {
    const newMessagesList = [];
    for (const entry of messagesList) {
      if (entry.id !== entryId) {
        newMessagesList.push(entry);
      } else {
        const newEntry = {
          ...entry,
          liked: !entry.liked,
        };
        newMessagesList.push(newEntry);
      }
    }
    setMessagesList(newMessagesList);
  };

  let numOfLikes = 0;
  for (const entry of messagesList) {
    if (entry.liked === true) {
      numOfLikes += 1;
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{numOfLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messagesList} updateLike={updateLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
