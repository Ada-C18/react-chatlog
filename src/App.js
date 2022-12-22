import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {

  const [likes, numLikes] = useState(0);
  const updateLikes = (clicked, numLike) => {
    numLike(!clicked);
    if (!clicked) {
      numLikes((count) => count + 1);
    } else {
        numLikes((count) => count - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <div>
          <p>{likes} ❤️s</p>
        </div>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
