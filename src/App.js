import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chat, setChat] = useState(chatMessages);

  const toggleLiked = (id) => {
    setChat(chat.map(entry => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } 
      else {
        return entry;
      }
    }));
  };

  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
      </header>
      <main>
      <ChatLog 
      entries={chat}
      onToggleLiked={toggleLiked}/>
      </main>
    </div>
  );
};

export default App;
