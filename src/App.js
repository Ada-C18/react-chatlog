import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const testMessageSender = chatMessages[0];
  // const testMessageBody = chatMessages[0];
  // const testMessageTimeStamp = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
      </header>
      <main>
        <ChatLog></ChatLog>
        <chatMessages></chatMessages>

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
