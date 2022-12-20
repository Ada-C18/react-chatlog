import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [entries, setEntries] = useState([]);

  const copyChatMessages = chatMessages.map((chat) => {
    return {...chat};
  });
  setEntries([copyChatMessages]);

  const newChatList = [];
  const updateLiked = (chatId) => {
    for (const chat of copyChatMessages) {
      if (chat.id !== chatId) {
        newChatList.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: !chat.liked,
        };
        newChatList.push(newChat);
      };
  };
  setEntries(newChatList);
};

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estagon</h1>
      </header>
      <main>
        <ChatLog entries={entries} updateLiked={updateLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
