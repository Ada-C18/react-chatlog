import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const updateLikeCount = (id) => {
    const newChatMessage = [...entries];
    for (let i = 0; i < newChatMessage.length; i++) {
      const message = newChatMessage[i];
      if (ChatEntry.id === id) {
        const newMessage = { ...message };
        if (newMessage.liked) {
          newMessage.liked = false;
        } else {
          newMessage.liked = true;
        }
        newChatMessage[i] = newMessage;
      }
    }
    setEntries(newChatMessage);
  };
  const likedTotal = (entries) => {
    return entries.reduce((total, i) => {
      return total + i.liked;
    }, 0);
  };

  const totalLikeTally = likedTotal(entries);

  return (
    <div id="App">
      <header>
        <h1>Application title ❤️ {totalLikeTally}</h1>
      </header>
      <main>
        {/* // sender="Joe Biden"
          // body="Get out by 8am. I'll count the silverware"
          // timeStamp="2018-05-18T22:12:03Z"
        //   entries={entries}
        //   onUpdateLikeCount={updateLikeCount} */}
        <ChatLog entries={entries} onUpdateLikeCount={updateLikeCount} />
      </main>
    </div>
  );
};

export default App;
