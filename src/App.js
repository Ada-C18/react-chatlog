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
    const msgs = chatLogState.map((msg) => {
      if (msg.id === id) {
        msg.liked = !msg.liked;
        countLikes(msg);
      }
      return msg;
    });
    setChatLogState(msgs);
  };

  let [totalLikes, setTotalLikes] = useState(0);

  const countLikes = (msg) => {
    if (msg.liked === true) {
      setTotalLikes(totalLikes + 1);
    } else {
      setTotalLikes(totalLikes - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatLogState} updateLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
