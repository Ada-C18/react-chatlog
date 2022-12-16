import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';

//const chats = chatMessages;

function App() {
  return (
    <div id="App">
      <header>
        <h1>🤍 Chat Log 🤍</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
}

export default App;
