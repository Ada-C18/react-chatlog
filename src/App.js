import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
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

  // let totalHearts = 0;
  // chatData.forEach(chat => {
  // if {chat["liked"] === 'true"'}

  // const heartMessage = () => {
  //   setLiked(!isLiked);
  // };

  // const heartType = isLiked ? '❤️' : '🤍';

  return (
    <div id="App">
      <header>{allHearts} ❤️s</header>
      <main>
        <ChatLog entries={chatData} onUpdateChat={updateChatData}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
