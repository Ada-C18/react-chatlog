import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [entriesData, setEntriesData] = useState(chatMessages);
  const [numOfHearts, setNumOfHearts] = useState(0);

  const likeMessage = (entryID) => {
    const newEntriesData = [...entriesData];
    for (const entry of newEntriesData) {
      if (entry.id === entryID) {
        if (entry.liked) {
          entry.liked = false;
          setNumOfHearts((numOfHearts) => numOfHearts - 1);
        } else {
          entry.liked = true;
          setNumOfHearts((numOfHearts) => numOfHearts + 1);
        }
      }
    }
    setEntriesData(newEntriesData);
  };

  return (
    <div id="App">
      <header>
        <h1> ✧･ﾟ: *✧･ﾟ:* Chatting without Godot *:･ﾟ✧*:･ﾟ✧ </h1>
        <h2 className="Heart-Counter">🐥 {numOfHearts} 🐥 </h2> {}
      </header>
      <main>
        <ChatLog entries={entriesData} onLikeMessage={likeMessage} />
      </main>
    </div>
  );
};

export default App;
