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
  };

  const calcTotalLikes = (chatData) => {
    let everyHeart = ''
    return chatData.reduce((likeTotal, chat) => {
      if (chat.liked) {
        everyHeart += '❤️'
      }
      return everyHeart;
    });
  };

  const displayTotalLikes = calcTotalLikes(chatData);

  return (
    <div id="App">
      <header className="App-header">
        <h1>ChatLog Wave 02</h1>
        <h2 className="likes-counter" >Likes: {displayTotalLikes}</h2>
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
