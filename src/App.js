import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const entries = chatMessages;
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/*Wave 02: Render ChatLog component */}
        <ChatLog entries={entries}></ChatLog>
      </main>
    </div>
  );
};

export default App;
