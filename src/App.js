import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chat, setChat] = useState(chatMessages);

  const updateChat = (id) => {
    setChat(chat.map(entry => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } 
      else {
        return entry;
      }
    }));
  };

  const getTotalLiked = () => {
    return chat.reduce((total, entry) => {
      return total + entry.liked;
    }, 0)
  };

  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
        <h2>Total liked: {getTotalLiked()} ❤️s</h2>
      </header>
      <main>
      <ChatLog 
      entries={chat}
      onUpdateChat={updateChat}/>
      </main>
    </div>
  );
};

export default App;
