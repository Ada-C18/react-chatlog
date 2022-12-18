import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const toggleHeart = (id) => {
    setMessages((messages) =>
      messages.map((entry) => {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      })
    );
  };

  const heartTally = (param) => {
    return param.reduce((total, heart) => {
      return total + heart.liked;
    }, 0);
  };

  const callingHeartTally = heartTally(messages);

  return (
    <div id="App">
      <header>
        <h1>ChatLog {callingHeartTally} ❤️s</h1>
      </header>
      <main>
        <ChatLog
          className="chat-log"
          entries={messages}
          toggleHeart={toggleHeart}
        />
      </main>
    </div>
  );
};

export default App;
