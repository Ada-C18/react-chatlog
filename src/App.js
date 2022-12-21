import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [likesCount, setLikesCount] = useState(0);

  const updateLikes = (id, like) => {
    const messageCopy = [...messages];
    const currentMessage = messageCopy.find((message) => message.id === id);
    currentMessage.liked = like;
    if (like) setLikesCount(likesCount + 1);
    if (!like) setLikesCount(likesCount - 1);
    setMessages(messageCopy);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{likesCount} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={chatMessages} setUpdateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
