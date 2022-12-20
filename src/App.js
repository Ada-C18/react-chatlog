import React, { useEffect } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [msgData, setMsgData] = useState(chatMessages);

  useEffect(() => {
    let likeCount = 0;
    for (const msg of msgData) {
      if (msg.liked) {
        likeCount += 1;
      }
    }
    document.getElementById('likeCounter').textContent = `${likeCount} ❤️s`;
  }, [msgData]);

  const updateLiked = (likedMsg) => {
    const messages = msgData.map((message) => {
      if (message.id === likedMsg.id) {
        return likedMsg;
      } else {
        return message;
      }
    });
    setMsgData(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2 id="likeCounter">0 ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={msgData} toggleLike={updateLiked} />
      </main>
    </div>
  );
};

export default App;
