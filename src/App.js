import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from ChatLog.js;

//const chats = chatMessages;

function App() {
  return (
    <div id="App">
      <header>
        <h1>🤍 Chat Log 🤍</h1>
      </header>
      <main>
        <ChatEntry chatMessages={chatMessages} />
        <ChatLog />
      </main>
    </div>
  );
};

export default App;
