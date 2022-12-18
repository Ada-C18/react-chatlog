// import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const CHATLOG = chatMessages;

const App = () => {
  // wave 3
  const chatLogCopy = CHATLOG.map((message) => {
    return {
      id: message.id,
      sender: message.sender,
      body: message.body,
      timeStamp: message.timeStamp,
      liked: message.liked,
    };
  });
  const [chatLogState, setChatLogState] = useState(chatLogCopy);

  const toggleLike = (id) => {
    console.log('toggleLike called');
    const msgs = chatLogState.map((msg) => {
      if (msg.id === id) {
        msg.liked = true;
      }
      return msg;
    });
    setChatLogState(msgs);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <ChatLog entries={chatLogState} updateLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
