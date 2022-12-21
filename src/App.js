import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likesCount, setLikesCount] = useState(0);
  const [messages, setMessages] = useState(chatMessages);

  const ToggleLike = (id, like) => {
    const foundMessage = messages.find((x) => x.id === id);
    foundMessage.liked = like;
    setMessages([...messages]);
    if (like) setLikesCount(likesCount + 1);
    if (!like) setLikesCount(likesCount - 1);
  };
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
          <ChatLog setToggleLike={ToggleLike} entries={chatMessages} />
        </div>
      </main>
    </div>
  );
};

export default App;
