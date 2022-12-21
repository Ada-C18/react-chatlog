import React from 'react';
import './App.css';
import { useState } from 'react';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  const [messageData,setMessageData] = useState(chatMessages)
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry 
        sender='Alia'
        body='Hello!'
        timeStamp="2018-05-29T22:49:06+00:00"></ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
