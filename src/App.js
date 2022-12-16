import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatEntry = <ChatEntry></ChatEntry>
  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
        
      </header>
      <main>
        {chatEntry}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
