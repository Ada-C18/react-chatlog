import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateLikes = (chatId) => {
    console.log('This is calling the updateLikes');
    const newChatEntries = [];

    for (const chat of chatData) {
      if (chat.id !== chatId) {
        console.log(chat.id);
        newChatEntries.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: !chat.liked,
        };
        console.log(newChat);
        newChatEntries.push(newChat);
      }
      setChatData(newChatEntries);
      console.log(chatData);
    }
  };

  const countLikes = () => {
    return chatData.reduce((accumulator, count) => {
      return count.liked ? accumulator + 1 : accumulator;
    }, 0);
  };

  return (
    <div id="App">
      <header>
        <h1>Instant Messenger</h1>
        <h2>{countLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatData} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
