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
        <h1>Ghibli Jabber</h1>
        <section>
          <h2 className="likes-counter" >Likes: {displayTotalLikes}</h2>
          <h2 className="movie-selector">Movie:
            <select>
              <option>Default Studio Ghibli</option>
              <option>Howl's Moving Castle</option>
              <option>My Neighbor Totoro</option>
              <option>Secret World of Arietty</option>
            </select>
          </h2>
          <h2 className="textbox-selector">
            Textbox (or heart?) color:
            <select>
              <option>Red</option>
              <option>Orange</option>
              <option>Yellow</option>
              <option>Green</option>
              <option>Blue</option>
            </select>
          </h2>
        </section>
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
