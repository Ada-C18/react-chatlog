import React from 'react';
//import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
//import ChatEntry from './components/ChatEntry';
// import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likeData, setLikeData] = useState(chatMessages);

  const likeChat = (id) => {
    setLikeData((likeData) => {
      return likeData.map((entry) => {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      });
    });
  };

  const calcTotalLikes = (likeData) => {
    return likeData.reduce((total, entry) => {
      return (total += entry.liked);
    }, 0);
  };

  const totalLikeTally = calcTotalLikes(likeData);

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon </h1>
        <h3> {totalLikeTally} ❤️s </h3>
      </header>
      <main>
        <ChatLog entries={likeData} onLike={likeChat} />
      </main>
    </div>
  );
};

export default App;
