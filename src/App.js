import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const entries = chatMessages;

const App = () => {
  const [messages, setMessages] = useState(entries)

  // create helper function to wrap up setMessages in a way that a particular id is liked

  // const updateLike = (id) => {

  // }

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={messages}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
