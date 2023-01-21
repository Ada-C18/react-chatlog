import React from 'react';
import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  
  const [messageData,setMessageData] = useState(chatMessages)
  
  const likeMessage = (id) => {
    setMessageData(messageData =>
    messageData.map(message => {
      if (message.id === id) {
        return {...message, liked: !message.liked}
      } else {
        return message;
      }
    }))
}
  const countLikes = (messageData) => {
    return messageData.reduce((total,message) =>{
      return total + (message.liked ? 1 : 0);
    }, 0
    )
  }
  const likesCount = `${countLikes(messageData)} ❤️s`
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{likesCount}</h2>
      </header>
      <main>
        <ChatLog 
        entries={messageData} 
        onLikeMessage={likeMessage}></ChatLog>
      </main>
    </div>
  );
};

export default App;
