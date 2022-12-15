import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const messageData = chatMessages
  // const messageData = chatMessages[0]
  return (
    <div id="App">
      <header>
        <h1>Smart ChatBot</h1>
      </header>
      <main>
      {/* <ChatEntry sender={messageData.sender} body={messageData.body} timeStamp={messageData.timeStamp} liked={messageData.liked}/> */}
      <ChatLog 
        messageData = {messageData}
      />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
