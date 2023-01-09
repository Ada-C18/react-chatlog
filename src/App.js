import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import TimeStamp from './components/TimeStamp';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatMessagesData, setChatMessagesData] = useState(chatMessages);
  const [likesNumber, setLikesNumber] = useState(0);

  const updateLiked = (updatedChatData) => {
    const chats = chatMessagesData.map((chat) => {
      if (chat.id === updatedChatData.id) {
        return updatedChatData;
      } else {
        return chat;
      }
    });
    const countLikes = chats.filter((chatComp) => chatComp.liked).length;
    setLikesNumber(countLikes);
    setChatMessagesData(chats);
  };

  const names = Array.from(
    new Set(
      chatMessagesData.map((chat) => {
        return chat.sender;
      })
    )
  );

  return (
    <div id="App">
      <React.StrictMode>
        <header>
          <h1>
            Chat between {names[0]} and {names[1]}
          </h1>
          <h2>{likesNumber} ❤️s</h2>
        </header>
        <main>
          {
            <ChatLog
              entries={chatMessagesData}
              updateChatsLikes={updateLiked}
              userNames={names}
              // timeStampComponent={TimeStamp}
            ></ChatLog>
          }
        </main>
      </React.StrictMode>
    </div>
  );
};

export default App;
