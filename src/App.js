import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/Chatlog.js';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);
  // const [ChatLog, setLike] = useState(chatMessages);

  const updateLiked = (id) => {
    const newChatEntry = messageData.map((chatEntry) => {
      if (chatEntry.id === id) {
        return {
          ...chatEntry,
          liked: !chatEntry.liked,
        };
      } else {
        return chatEntry;
      }
    });
    setMessageData(newChatEntry);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section className="widget">_❤️s</section>
      </header>
      <main>
        <ChatLog entries={messageData} updateLiked={updateLiked} />
      </main>
    </div>
  );
};

export default App;
