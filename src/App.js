import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntry] = useState(chatMessages);

  const likeEntry = (id) => {
    setEntry((entries) => {
      return entries.map((entry) => {
        if (entry.id === id) {
          console.log('id:', id, entry.liked);
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      });
    });
  };

  // count number of red hearts
  const calcTotalLikes = (entries) => {
    return entries.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const totalHeartsTally = calcTotalLikes(entries);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        <ChatEntry 
          sender="Joe Biden"
          body="Get out by 8am.  I'll count the silverware"
          timeStamp="2018-05-18T22:12:03Z"
          /> */}
        {/*Wave 02: Render ChatLog component */}
        <h1>{totalHeartsTally} ❤️s</h1>
        <ChatLog entries={entries} onLikeEntry={likeEntry} />
      </main>
    </div>
  );
};

export default App;
