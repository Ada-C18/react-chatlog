import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ChatEntry from './components/ChatEntry';

const entries = chatMessages;

const App = () => {
  const [messageData, setMessageData] = useState(entries);

  const heartToggle = (id) => {
    setMessageData((messageData) =>
      messageData.map((message) => {
        if (message.id === id) {
          if (message.liked === true) {
            message.liked = false;

            return message;
          } else if (message.liked === false) {
            message.liked = true;
            return message;
          }
        }
        return message;
      })
    );
  };

  const calcTotalHearts = (messageData) => {
    return messageData.reduce((total, chatEntry) => {
      return total + chatEntry.liked;
    }, 0);
  };

  const totalHearts = calcTotalHearts(messageData);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2 className="heart-counter">{totalHearts} ❤️s</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}

        <ChatLog entries={messageData} onHeartToggle={heartToggle}></ChatLog>
      </main>
    </div>
  );
};

export default App;
