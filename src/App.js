import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
// import ChatEntry from './components/ChatEntry';

const App = () => {
  const [chatMessagesData, setChatMessagesData] = useState(chatMessages);

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

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <span className="heartTotals">{chatlikes} ❤️s</span>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
         <ChatLog entries={chatMessages} />

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

