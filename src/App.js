import React, { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';

const sender1 = chatMessages[0].sender;
const sender2 = chatMessages[1].sender;

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const updateChat = (id) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        // same as below:
        // return Object.assign({}, entry, { liked: !entry.liked });
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setEntries(newEntries);
  };

  const calcTotalLikes = (entries) => {
    return entries.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const totalLikes = calcTotalLikes(entries);

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between {sender1} and {sender2}
        </h1>
        <section>
          <h2 className="widget" id="heartWidget">
            {totalLikes} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={entries}
          updateChat={updateChat}
          sender1={sender1}
          sender2={sender2}
        />
      </main>
    </div>
  );
};

export default App;
