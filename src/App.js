import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {
  const ChatEntryComp = chatMessages.map((chat) => (
    <ChatEntry 
    sender={chat.sender}
    body = {chat.body}
    timeStamp = {chat.timeStamp}

    />

  ));

// const App = () => {
    
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <div className='chat-entry local'>
          {ChatEntryComp}
        <ChatLog entries={chatMessages}/>
        </div>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
