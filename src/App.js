import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, setChatData]= useState(chatMessages)

  const updateLikes = (id) => {
    console.log('updatelikes is being called');
    const newChatEntries = [];

    for (const chat of chatData) {
      if (chat.id !== id) {
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
        <ChatLog entries={chatData} updateLikes={updateLikes}></ChatLog>
      </main>
    </div>
  );
};

export default App;
