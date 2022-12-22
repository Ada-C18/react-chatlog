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
    if (message.liked === true) {
      likesCount = likes + 1;
    } else {
      likesCount = likes - 1;
    };
    
    setLikes(likesCount);
  };

// creates a list of chatParticipants in case we have a group chat with more than two members
// also handles case where one participant sends multiple messages in a row
  const chatParticipants = []
  for (const message of chatMessages) {
    if (!chatParticipants.includes(message.sender)) {
      chatParticipants.push(message.sender);
    };
  };
  
  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
        <h4>In this chat: {chatParticipants.join(', ')}</h4>
        <p>{likes} ❤️s</p>
      </header>
      <main>
        <ChatLog 
        entries = {chatLogData}
        participants = {chatParticipants}
        onLike = {updateChatLogData} 
        className = "chat-log"
        >
        </ChatLog>   
      </main>
    </div>
  );
};

export default App;
