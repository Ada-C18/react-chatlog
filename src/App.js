import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';



const App = () => {

  

  const [chatLogData, setChatLogData] = useState(chatMessages);
  const [likes, setLikes] = useState(0);

  const updateChatLogData = updatedChat => {
    const messages = chatLogData.map(message => {
      if (message.id === updatedChat.id) {
        return updatedChat;
      } else {
        return message;
      };
    });

    setChatLogData(messages);
    updateLikes(updatedChat);
  };
      
  const updateLikes = (message) => {
    let likesCount;
    // for (const message of messages) {
    //   if (message.liked === true) {
    //     likesCount = likes + 1};
    //   };
    if (message.liked === true) {
      likesCount = likes + 1;
    } else {
      likesCount = likes - 1;
    };
    
    setLikes(likesCount);
  };

  

  
  
  
  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
        <p>{likes} likes!</p>
      </header>
      <main>

        <ChatLog 
        entries = {chatLogData}
        onLike = {updateChatLogData} 
        className = "chat-log"
        >

        </ChatLog>
             
      </main>
    </div>
  );
};

export default App;
