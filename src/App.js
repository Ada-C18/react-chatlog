import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import { useState } from 'react'
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages)

  const likeMessage = (id) => {
    setChatData(chatData => chatData.map(chat => {
      if(chat.id === id) {
        return {...chat, liked: !chat.liked}
      } else {
        return chat
      }
    }))
  }

  const countLikedMessages = (chatData) => {
    return chatData.reduce((total, chat) => {
      return total + (chat.liked ? 1 : 0);
    }, 0)
  }
  
  const numberOfLikedMessages = `${countLikedMessages(chatData)} ❤️s`

  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
        <h2>{numberOfLikedMessages}</h2>
      </header>
      <main>
        <ChatLog 
          entries = {chatData}
          onLikeMessage = {likeMessage}
        />
      </main>
    </div>
  );
};

export default App;
