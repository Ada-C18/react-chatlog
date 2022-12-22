import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likeCount, setLikeCount] = useState(0);
  const updateLikeCount = (increment) => {
    setLikeCount(likeCount + increment);
  };
  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon's Conversation</h1>
        <h2>{`${likeCount} ❤️s`}</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
          entries={chatMessages}
          onUpdateLikeCount={updateLikeCount}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
