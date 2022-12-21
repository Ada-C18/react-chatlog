import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/Chatlog.js';

const App = () => {
  console.log('App component is rendering');

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

  const totalLikes = messageData.filter((chatEntry) => {
    return chatEntry.liked === true;
  }).length;

  const sender1 = messageData[0].sender;
  const sender2 = messageData[1].sender;

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {sender1} and {sender2}
        </h1>
        <section className="widget">
          <h1 id="#heartWidget">{totalLikes} ❤️s</h1>
        </section>
      </header>
      <main>
        <ChatLog entries={messageData} updateLiked={updateLiked} />
      </main>
    </div>
  );
};

export default App;
