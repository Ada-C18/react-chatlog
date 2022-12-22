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
    let everyHeart = '❤️'
    let numberOfHearts = 0
    return chatData.reduce((likeTotal, chat) => {
      if (chat.liked) {
        numberOfHearts += 1
      }
      return `${numberOfHearts}${everyHeart}`;
    }, 1);
  };

  const displayTotalLikes = calcTotalLikes(chatData);

  return (
    <div id="App">
      <header className="App-header">
        <h1>Between Bots</h1>
        <h2 className="likes-counter" >Likes: {displayTotalLikes}</h2>
      </header>
      <main>
        <div>
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
