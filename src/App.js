import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const chatDataCopy = chatData.map((message) => {
    return { ...message };
  });

  const [chatLog, setChatLog] = useState(chatDataCopy);
  const [likesCount, setLikesCount] = useState(0);

  const updateLiked = (messageId) => {
    // console.log(`update liked is called ${messageId}`);
    let newChatLog = [];
    for (const message of chatLog) {
      if (message.id !== messageId) {
        newChatLog.push(message);
      } else {
        const newMessage = {
          ...message,
          liked: !message.liked,
        };
        newChatLog.push(newMessage);
        if (newMessage.liked) {
          setLikesCount(likesCount + 1);
        } else {
          setLikesCount(likesCount - 1);
        }
      }
    }
    setChatLog(newChatLog);
  };

  return (
    <div id="App">
      <header>
        <h1>Luke and Bill Chat Log</h1>
        <section>
          <p className="widget">{likesCount} ❤️s </p>
        </section>
      </header>
      <main>
        <ChatLog entries={chatLog} updateLiked={updateLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
