import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const MESSAGES = chatMessages

const App = () => {
  // const [messageData, setMessageData] = useState(testMessage);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry sender={MESSAGES[0]['sender']} body={MESSAGES[0]['body']} timeStamp={MESSAGES[0]['timeStamp']} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
