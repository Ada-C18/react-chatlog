import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);
  const [likesCount, setLikesCount] = useState(0);


  const toggleLiked = (id) => {
    const messages = messageData.map((message) => {
      if (message.id === id) {
        return {...message, liked : !message.liked };
      } else {
        return message;
      }
      
    });
    const likes = messages.filter((message) => message.liked).length
    setMessageData(messages);
    setLikesCount(likes)
  }
    

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section><h2 className="widget">{likesCount} ❤️s</h2></section>
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
