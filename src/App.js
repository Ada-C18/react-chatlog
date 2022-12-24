import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (id) => {
    setChatData((chatData) =>
      chatData.map((chat) => {
        if (chat.id === id) {
          return { ...chat, liked: !chat.liked };
        } else {
          return chat;
        }
      })
    );
  };

  const findTotalHearts = (chatData) => {
    let total = 0;
    for (const element of chatData) {
      if (element.liked === true) {
        total += 1;
      }
    }
    return total;
  };

  const allHearts = findTotalHearts(chatData);

  return (
    <div id="App">
      <header>{allHearts} ❤️s</header>
      <main>
        <ChatLog entries={chatData} onUpdateChat={updateChatData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
