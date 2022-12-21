import React, { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry.js';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const oneMessage = chatMessages[0];
  //wrap chat messages in use state, update <ChatLog entries={chatMessages}
  // const ChatMessages = chatMessages;

  return (
    <div id="App">
      <header>
        <h1>Chat Messages</h1>
      </header>
      <main>
        {/* Here's the first chat Message */}
        {/* <chatMessages></chatMessages> */}
        {/* <ChatEntry
        sender={oneMessage.sender}
        body={oneMessage.body}
        timestamp={oneMessage.timeStamp}
      ></ChatEntry> */}

        <ChatLog entries={chatMessages} />
        {/* Wave 01: Render one ChatEntry component
      Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
