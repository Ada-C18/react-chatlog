import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const messages = chatMessages.map((message) => {
    return (
      <div id="App">
        <header>
          <h1>Application title</h1>
        </header>
        <main>
          <ChatLog entries={chatMessages} />
        </main>
      </div>
    );
  });
  return messages;
};

export default App;
