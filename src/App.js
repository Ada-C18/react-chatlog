import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const CHATS = [chatMessages[0], chatMessages[1]];

const App = () => {
  const [chats, setChats] = useState(CHATS);

  const updateChat = (id) => {
    const likeCount = chats.timeStamp(chat => {
      if (chat.id === id) {
        return {...chat.liked + 1};
      } else {
        return chat;
      }
    });

    setChats(likeCount);

  };

  return (
    <div id="App">
      <header className="App-header">
        <h1>ChatLog Wave 01</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <div>
          <p>ChatEntry #1 Here:</p>
          <ChatEntry 
            chats={chats}
            onLiked={updateChat}
          />
        </div>
        <div>
          <p>ChatEntry #2 Here:</p>
          <ChatEntry 
            chats={chats}
            onLiked={updateChat}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
