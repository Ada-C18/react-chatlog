import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog'

const App = () => {
  console.log('the value of chatMessages is', chatMessages);
  // do I need to make a copy of chatMessages here?
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry chatMessages={chatMessages} /> */}
        <ChatLog entries={chatMessages}/>

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
