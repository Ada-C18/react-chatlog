import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (id) => {
    const updatedChat = chatData.map(chat => {
      if (chat.id === id) {
        return {...chat, liked: !chat.liked};
      } else {
        return chat;
      }
    });
    setChatData(updatedChat);
  };
  
  const countHearts = (id) => {
    return chatData.reduce((total, message) => {
      return message.liked ? total + 1 : total;
    }, 0)
  }
  return (
    <div id="App">
      <header>
        <h1>Chat Bots</h1>
        <h2 className="like">
        LikeCount: {countHearts()} ❤️s 
        </h2>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onUpdateChat={updateChatData}>
        </ChatLog>
      </main>
    </div>
  );
  };
export default App;