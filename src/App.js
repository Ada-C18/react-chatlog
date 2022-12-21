import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const[chatData, setChatData] = useState(chatMessages);

  const calcTotalLikes = (chatData) => {
    return chatData.reduce((total, message) => {
        if (message.liked) {
          total += 1
        }
        return total;
    }, 0);
  };

  const totalLikeTally = calcTotalLikes(chatData);
  

  const updateChatData = (updatedChatData) => {
    const entries = chatData.map(message => {
      if (message.id === updatedChatData.id) {
        return updatedChatData
      } else {
        return message
      };
    });
    setChatData(entries);
  };
  

  return (
    <div id="App">
      <header>
        <h1>Chat Log Vladmir and Estragon</h1>
        <h2>{totalLikeTally} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatData}
        onUpdateChat = {updateChatData}
        />
      </main>
    </div>
  );
};

export default App;