import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';


const App = () => {
  const message = chatMessages[0]
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry 
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
