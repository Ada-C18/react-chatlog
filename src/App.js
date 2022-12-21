import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatLog, setChatLog] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);

  const UpdateLikes = (id, like) => {
    const currentEntry = chatLog.find((entry) => entry.id === id);
    currentEntry.liked = like;
    setChatLog([...chatLog]);
    if (like) setLikeCount(likeCount + 1);
    if (!like) setLikeCount(likeCount - 1);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log </h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} setLikeStatus={UpdateLikes} />
      </main>
    </div>
  );
};

export default App;
