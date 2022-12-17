import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

const App = () => {
  const [chatMessagesData, setChatMessagesData] = useState(chatMessages);
  // const [entryLikes, setEntryLikes] = useState(0);

  const updateChatMessageData = (updatedChat) => {
    const chats = chatMessagesData.map((chat) => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return chat;
      }
    });
    setChatMessagesData(chats);
  };

  const chatlikes = chatMessagesData.filter((message) => message.liked).length;

  const names = [...new Set(chatMessagesData.map((message) => message.sender))];

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between {names[0]} and {names[1]}
        </h1>
        <section>
          {/* <section className="widget"> */}
          <span className="widget heartWidget">{chatlikes} ❤️s</span>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
          entries={chatMessagesData}
          onUpdateLiked={updateChatMessageData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
