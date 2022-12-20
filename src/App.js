import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [msgData, setMsgData] = useState(chatMessages);

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
