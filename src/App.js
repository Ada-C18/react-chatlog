import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

const App = () => {
  const initialCopy = chatMessages.map(chatEntry => {
    return {...chatEntry};})
  
  const [chatLog, setChatData] = useState(initialCopy);
  const [total, setTotalLikes] = useState(0);
  
  
  const addTotal = (total) => {
    total +=1 
    setTotalLikes(total)
  }

  const subtractTotal = (total) => {
    total -= 1
    setTotalLikes(total)
  }

  const updateChatLog = (chatId, updatedLikeStatus) => {
    const newChatLog = [];
    for(const chatEntry of chatLog) {
      if(chatEntry.id !== chatId) {
        newChatLog.push(chatEntry);
      } else {
        const newChat = {
          ...chatEntry, 
          liked: updatedLikeStatus
        };
        if (newChat.liked === true) {
          addTotal(total)
        } else {subtractTotal(total)}
        newChatLog.push(newChat);
      }
    }
    setChatData(newChatLog);
  };
  return (
    <div id="App">
      <header>
        <h1>Vladimir & Estragon's Chat Log</h1>
        <h2>{total} ❤️s</h2>
      </header>
      <main>
        <ChatLog 
        entries={chatLog} 
        updateChatLog={updateChatLog}/>
      </main>
    </div>
  )};

export default App;
