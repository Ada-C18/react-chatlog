import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Robot v. Robot 🤖 </h1>
      </header>
      <main>
        <ChatEntry entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
