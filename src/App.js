import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);

  const setLiked = (id) => {
    setMessageData((messageData) =>
      messageData.map((entry) => {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      })
    );
  };

  const calcTotalLiked = (messageData) => {
    return messageData.reduce((total, message) => {
      if (message.liked) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
  };

  const totalLikedTally = calcTotalLiked(messageData);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <h1>{totalLikedTally} ❤️s</h1>
        </section>
      </header>
      <main>
        <ChatLog entries={messageData} onSetLiked={setLiked} />
      </main>
    </div>
  );
};

export default App;
