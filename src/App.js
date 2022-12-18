import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const countHeart = (messages) => {
    return messages.reduce((total, message) => {
      if (message.liked) total++;
      return total;
    }, 0);
  };

  const updateHeartColor = (id) => {
    setMessages((oldmessages) => {
      return oldmessages.map((message) => {
        if (message.id === id) {
          return { ...message, liked: !message.liked };
        } else {
          return message;
        }
      });
    });
  };

  const totalLikedMessages = countHeart(messages);

  return (
    <div id="App">
      <header>
        <h1>{totalLikedMessages} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={messages} onToggleHeart={updateHeartColor} />
      </main>
    </div>
  );
};

export default App;
