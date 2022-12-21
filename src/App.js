import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const copyChatMessages = chatMessages.map((chat) => {
    return {...chat};
  });

  const [entries, setEntries] = useState(copyChatMessages);


  const newChatList = [];
  
  const updateLiked = (chatId) => {
    console.log('updateLiked called');
    for (const chat of entries) {
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
  console.log(newChatList);
  setEntries(newChatList);
  };


  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={entries} updateLiked={updateLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
