import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);

  const likeNumber = chatEntries.filter(entry => entry.liked === true).length;

  const recordLikes = (updatedEntry) => {
    const entries = chatEntries.map((entry) =>
      {if (updatedEntry.id === entry.id) {
        return updatedEntry
      } else {
        return entry
      }
    });
    setChatEntries(entries)
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {likeNumber} ❤️s
        <ChatLog
        entries={chatEntries}
        onLike={recordLikes}
        remoteSender={chatEntries[0].sender}
        />
      </main>
    </div>
  );
};

export default App;
