import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const chatCopy =[]
  for (const message of chatMessages){
    chatCopy.push(message)
  }
  const [chatData, setChatData]= useState(chatCopy)

  const updateLikes = (id, updatedLike) => {
    console.log('updatelikes is being called');
    const newChatEntries = [];
    for (const chat of chatData) {
      if (chat.id !== id) {
        
        newChatEntries.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: updatedLike
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
