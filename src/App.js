import React from 'react';
import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [likedData, setLikedData] = useState(chatMessages);

  const switchLikeButton = (id) => {
    setLikedData(likedData => likedData.map(entry => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked}
      } else {
        return entry;
      }
    }))
  };

  const countTotalLikes = (likedData) => {
    let likedHeart = '❤️'
    let numberOfHearts = 0
    return likedData.reduce((totalLikes, chat) => {
      if (chat.liked) {
        numberOfHearts += 1
      }
      return `${numberOfHearts} ${likedHeart}s`;
    }, 1);
  };

  const countLikes = countTotalLikes(likedData);


  return (
    <div id="App">
      <header>
        <h1>Chat App</h1>
        <p> {countLikes}</p>
      </header>
      <main>
      <ChatLog entries={likedData} onLiked={switchLikeButton}
      />
      </main>
    </div>
  );
};



export default App;
