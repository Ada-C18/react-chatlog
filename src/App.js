import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatData from './data/messages.json';

// create likes counter for chat entries - pass this to chatlog then pass to chat entry

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chatty Lynny</h1>
      </header>
      <main>
        <ChatLog entries={chatData}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
