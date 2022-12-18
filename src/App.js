import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const changeLike = (chatId, liked) => {
    console.log('changeLike called');
    return !liked;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} changeLike={changeLike} />
      </main>
    </div>
  );
};

export default App;

/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */
