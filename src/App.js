import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry.js';
import ChatLog from './components/ChatLog.js';
import TimeStamp from './components/TimeStamp.js';

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
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
