import React from 'react';
import './App.css';
import { useState } from 'react';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  
  const [messageData,setMessageData] = useState(chatMessages)
  
  const likeMessage = (id) => {
    setMessageData = messageData => messageData.map(message => {
      if(message.id === id) {
        return {...message, liked: message.liked === true}
      } else {
        return message;
      };
    });
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog 
        entries={chatMessages} 
        onLikeMessage={likeMessage}></ChatLog>
      </main>
    </div>
  );
};

export default App;
