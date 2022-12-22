import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';



const App = (id) => {
 const [chatData, setChatData] = useState(chatMessages);
 
 const onlikeChat = (id) => {
  
  setChatData(chatData => chatData.map(chat => {
    if(chat.id === id) {
      return {...chat, liked: !chat.liked} 
      
    } else {
      return chat
    }
  }));
 };

 const calcTotalLikes = (chatData) => {
  return chatData.reduce((total, chat) => {
    return total + chat.liked;
  }, 0)
};
 
const totalLikes = calcTotalLikes(chatData)
  
  return (
    <div id="App">
      <header>
        <h1> {totalLikes} ❤️s </h1>
      </header>
      <main>
        <ChatLog 
        entries={chatData}
        onlikeChat= {onlikeChat}
        
        ></ChatLog>
        
     </main>
    </div>
  );
  };

export default App;
