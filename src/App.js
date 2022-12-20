import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [likes, setLikes] = useState(0);

  const displayLikes = (likeStatus) => {
    let likeCount = likes;
    if (likeStatus === true) {
      likeCount += 1;
    } else {
      likeCount -= 1;
    }
    setLikes(likeCount);
  };

  const messagesCopy = chatMessages.map((message) => {
    return { ...message };
  });

  const [messages, setMessages] = useState(messagesCopy);

  const handleLike = (id) => {
    const updatedMessages = [];
    for (const message of messages) {
      if (message.id === id) {
        message.liked = !message.liked;
        updatedMessages.push(message);
        displayLikes(message.liked);
      } else {
        updatedMessages.push(message);
      }
    }
    setMessages(updatedMessages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h3>{likes} ❤️s</h3>
      </header>
      <main>
        <ChatLog
          messages={messages}
          handleLike={handleLike}
          // displayLikes={displayLikes}
        />
      </main>
    </div>
  );
};

export default App;
