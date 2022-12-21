import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const entries = chatMessages;

const App = () => {
  const [messages, setMessages] = useState(entries);

  const heartCount = (messages) => {
    return messages.reduce((total, message) => {
      if (message.liked) total++;
      return total;
    },0);
  };

  const changeHeartColor = (id) => {
    setMessages((oldmessages) => {
      return oldmessages.map((message) => {
        if (message.id === id) {
          return {...message, liked: !message.liked}
        }
        return message;
      });
    });
  };

  const likedMessages = heartCount(messages);

  return (
    <div id="App">
      <header>
        <h1>{likedMessages} ❤️s</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={messages} toggleHeart={changeHeartColor}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
