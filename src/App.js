import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const toggleLikeButton = (id) => {
    setChatData(chatData => chatData.map(chat => {
      if (chat.id === id) {
        return {...chat, liked: !chat.liked}
      } else {
        return chat;
      }
    }))
    console.log("Hey I'm here!!")
  };

  // calculate function here
  const displayTotalLikes = (chatData) => {
    let skip = 0;
  }

  return (
    <div id="App">
      <header className="App-header">
        <h1>ChatLog Wave 02</h1>
      </header>
      <main>
        <div>
          <p>ChatLog Here:</p>
          <ChatLog
            chats={chatData}
            onLiked={toggleLikeButton}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
