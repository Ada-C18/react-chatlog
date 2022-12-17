import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  // for loop version
  // const countHeart = (messages) => {
  //   let count = 0;
  //   for (const message of messages) {
  //     if (message.liked) {
  //       count += 1;
  //     }
  //   }
  //   return `${count} ❤️'s`;
  // };

  const countHeart = (messages) => {
    return messages.reduce((total, message) => {
      if (message.liked) total++;
      return total;
    }, 0);
  };

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

  const totalLikedMessages = countHeart(messages);

  return (
    <div id="App">
      <header>
        <h1>{totalLikedMessages}❤️'s</h1>
      </header>
      <main>
        <ChatLog entries={messages} onToggleHeart={updateHeartColor} />
      </main>
    </div>
  );
};

export default App;
