import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const updateHeartColor = (id) => {
    setMessages((oldHeart) => {
      return oldHeart.map((message) => {
        if (message.id === id) {
          return { ...message, liked: !message.liked };
        } else {
          return message;
        }
      });
    });
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messages} onToggleHeart={updateHeartColor} />
      </main>
    </div>
  );
};

export default App;
