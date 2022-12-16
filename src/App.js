import React from 'react';
// import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';


function App () 
{

  return (
    <div id="App">
      <header>
        <h1>Vladimir & Estragon</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
        {/* entries is the props, chatMessages is the  */}
      </main>
    </div>
  );
};

export default App;
