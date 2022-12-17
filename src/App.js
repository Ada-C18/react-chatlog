import React from 'react';
import './App.css';
// import { useState } from 'react';
import ChatLog from './ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>ChatLog!</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
