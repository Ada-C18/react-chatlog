import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likesCount, setLikesCount] = useState(0);
  document.addEventListener('onLikeToggle', (likedEvt) => {
    likedEvt.stopPropagation();
    likedEvt.detail.liked
      ? setLikesCount(likesCount + 1)
      : setLikesCount(likesCount - 1);
  });

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{likesCount} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <div>
          <ChatLog entries={chatMessages} />
        </div>
      </main>
    </div>
  );
};

export default App;
