import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry.js';
import ChatLog from './components/ChatLog.js';
import TimeStamp from './components/TimeStamp.js';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry></ChatEntry>
        <ChatLog></ChatLog>
        <TimeStamp></TimeStamp>
      </main>
    </div>
  );
};

export default App;
