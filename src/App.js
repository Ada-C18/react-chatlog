import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladmir and Estragon</h1>
        <h2>ChatEntry</h2>
        <h3>ChatLog</h3>
      </header>
      <main>
        <ChatEntry
          sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timeStamp={chatMessages[0].timeStamp}
        />
        <ChatLog entries={chatMessages}
        />
        {/* Chatlog
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
