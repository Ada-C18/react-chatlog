import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [listOfMessages, setListOfMessages] = useState(chatMessages);

  const updateChatMessage = (changedMessage) => {
    const updatedChatMessages = listOfMessages.map((originalMessage) => {
      if (originalMessage.id === changedMessage.id) {
        return changedMessage;
      } else {
        return originalMessage;
      }
    });
    setListOfMessages(updatedChatMessages);
  };

  const numLikedMessages = listOfMessages.reduce((sum, entry) => {
    if (entry.liked) {
      return sum + 1;
    }
    return sum;
  }, 0);

  return (
    <div id="App">
      <header>
        <h1>Vladimir &amp; Estagon's Chatlog</h1>
      </header>
      <main>
        <div>{numLikedMessages} ❤️s</div>
        <ChatLog
          entries={listOfMessages}
          onLikeMessage={updateChatMessage}
        ></ChatLog>
        {/* {listOfMessages} */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
