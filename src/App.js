import React, { useState } from 'react';
import './App.css';
import allMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(allMessages);

  // pass this function down to ChatEntry using props
  // updates chatData based on the input
  const updateChatEntry = (updatedChatEntry) => {
    const messages = chatData.map((message) => {
      if (message.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return message;
      }
    });
    setChatData(messages);
  };

  const countAllLikes = (chatData) => {
    return chatData.reduce((likeCount, message) => {
      if (message.liked) {
        likeCount += 1;
      }
      return likeCount;
    }, 0);
  };

  const totalLikeCount = countAllLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>Caitlyn and Anjula's Chat Log</h1>
        <div>Total likes: {`${totalLikeCount} ❤️s`}</div>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChatEntry={updateChatEntry} />
      </main>
    </div>
  );
};

export default App;
