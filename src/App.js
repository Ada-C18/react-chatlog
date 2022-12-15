import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  // const [likes, setLikes] = useState(0);

  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (chatID) => {
    const chatEntries = chatData.map((chatEntry) => {
      if (chatEntry.id === chatID) {
        return { ...chatEntry, liked: !chatEntry.liked };
      } else {
        return chatEntry;
      }
    });
    setChatData(chatEntries);
  };

  const countLikedMessages = () => {
    return chatData.reduce((sum, message) => {
      return message.liked ? sum + 1 : sum;
    }, 0);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Bot</h1>
        <h2>{countLikedMessages()} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatData} onUpdate={updateChatData}></ChatLog>
      </main>
    </div>
  );
};
export default App;
