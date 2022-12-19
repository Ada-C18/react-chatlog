import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const entries = chatMessages;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estagon</h1>
      </header>
      <main>
        <ChatLog entries={entries}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
