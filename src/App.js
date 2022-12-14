import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

// temporary for debugging
const testMessage = chatMessages[0];

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender={testMessage.sender}
          body={testMessage.body}
          timeStamp={testMessage.timeStamp}
        ></ChatEntry>
      </main>
    </div>
  );
};

export default App;
