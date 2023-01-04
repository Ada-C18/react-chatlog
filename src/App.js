import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'


const App = () => {
  const [chatData, setChatmessages] = useState(chatMessages)

  const updateChatData = updatedChat => {
    const chats = chatData.map(chat => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return chat;
      }
    });

    setChatmessages(chats);
  };

  const calcTotalLikes = (chatData) => {
    return chatData.reduce((total, chat) => {
      return total + chat.liked;
    }, 0)
  };

  const totalLikeCount = calcTotalLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{totalLikeCount} ❤️s</h2>
      </header>
      <main>
        <div>
          <ChatLog 
          entries = {chatData} 
          updatedChat = {updateChatData}
          ></ChatLog>
        </div>
      </main>
    </div>
  );
};

export default App;
