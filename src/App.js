import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  // const toggleLiked = (id) => {
  //   return setChatData((currentChatData) => {
  //     return currentChatData.map((entry) => {
  //       if (entry.id === id) {
  //         return { ...entry, liked: !entry.liked };
  //       } else {
  //         return entry;
  //       }
  //     });
  //   });
  // };

  const updateChatData = (updatedChatData) => {
    setChatData(
      chatData.map((entry) =>
        entry.id === updatedChatData.id ? updatedChatData : entry
      )
    );
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={chatData} updateChatEntry={updateChatData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
