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
        newChatEntries.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: !chat.liked,
        };
        newChatEntries.push(newChat);
      }
      setChatData(newChatEntries);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Instant Messenger</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
