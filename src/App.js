import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry 
        body = {chatMessages[0].body}
        sender = {chatMessages[0].sender}
        timeStamp = {chatMessages[0].timeStamp}
          /> */}

        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
