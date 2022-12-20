import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header className="App-header">
        <h1>ChatLog Wave 01</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <p>ChatEntry #1 Here:</p>
        <ChatEntry />
        <p>ChatEntry #2 Here:</p>
        <ChatEntry />
      </main>
    </div>
  );
};

export default App;
