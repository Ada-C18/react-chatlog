import React from 'react';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import './App.css';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const updateLikedEntry = (id) => {
    setEntries((entries) =>
      entries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      })
    );
  };

  const likes = entries.filter((entry) => entry.liked === true);
  const likesCount = likes.length;
  //   let likedMessages = 0;
  //   for (let entry of entries)
  //     if (entry.liked === true) {
  //       console.log(entry);
  //       return likedMessages++;
  //     }
  // };

  // const likes = likeCount(entries);

  return (
    <div id="App">
      <header>
        <h1>ChatLog!</h1>
        <h4>{likesCount} ❤️s</h4>
      </header>
      <main>
        <ChatLog entries={entries} onUpdateLikedEntry={updateLikedEntry} />
      </main>
    </div>
  );
};

export default App;
