import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const updateLikes = (id, like) => {
    const currentMessage = messages.find((message) => message.id === id);
    currentMessage.liked = like;
    setMessages([...messages]);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} setUpdateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
