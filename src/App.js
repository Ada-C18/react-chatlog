import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const updateChatData = (updatedChat) => {
    const chats = chatData.map((chat) => {
      if (chat.id === updatedChat.id) {
        return updatedChat;
      } else {
        return chat;
      }
    });
    setChatData(chats);
  };
  // const [isLiked, setLiked] = useState(false);

  // const heartMessage = () => {
  //   setLiked(!isLiked);
  // };

  // const heartType = isLiked ? '❤️' : '🤍';

  return (
    <div id="App">
      <header>Title</header>
      <main>
        <ChatLog entries={chatData} onUpdateChat={updateChatData}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
