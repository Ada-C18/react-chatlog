import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';



const App = () => {

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2> # of Likes: </h2>
      </header>

      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} />

      </main>

    </div>
  );
};


export default App;
