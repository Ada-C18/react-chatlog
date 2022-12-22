import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  // const toggleLikeButton = (id) => {
  //   const likeCount = chats.timeStamp(chat => {
  //     if (chat.id === id) {
  //       return {...chat.liked + 1};
  //     } else {
  //       return chat;
  //     }
  //   });

  //   setChatData(likeCount);

  // };

  return (
    <div id="App">
      <header className="App-header">
        <h1>ChatLog Wave 02</h1>
      </header>
      <main>
        <div>
          <p>ChatLog Here:</p>
          <ChatLog
            chatData={chatData}
            // onLiked={toggleLikeButton}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
