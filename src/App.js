import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatData from './data/messages.json';
import { useState } from 'react';

// create likes counter for chat entries - pass this to chatlog then pass to chat entry

const App = () => {
  const chatDataCopy = chatData.map((message) => {
    return { ...message };
  });

  // console.log(`🌸${chatDataCopy}`);
  const [chatLog, setChatLog] = useState(chatDataCopy);

  const updateLiked = (messageId) => {
    console.log(`update liked is called ${messageId}`);
    const newChatLog = [];
    for (const message of chatLog) {
      if (message.id !== messageId) {
        newChatLog.push(message);
      } else {
        const newMessage = {
          ...message,
          liked: !message.liked,
        };
        newChatLog.push(newMessage);
      }
    }
    setChatLog(newChatLog);
  };

  return (
    <div id="App">
      <header>
        <h1>Chatty Lynny</h1>
      </header>
      <main>
        <ChatLog entries={chatDataCopy} updateLiked={updateLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
