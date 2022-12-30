import React from 'react';
import './App.css';

import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat App</h1>
      </header>
      <main>
      <ChatLog chatMessages={chatMessages} />
      </main>
    </div>
  );
};

export default App;
