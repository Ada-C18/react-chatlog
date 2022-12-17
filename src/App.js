import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);
  

  const toggleLiked = (id) => {
    const messages = messageData.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
      }
      return message
    });
    setMessageData(messages);
  }


  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog 
        entries={messageData} 
        updateLikedEntry={toggleLiked}
        />
      </main>
    </div>
  );
};

export default App;
