import React, { useState } from 'react';
import ChatEntry from './components/ChatEntry';
import './App.css';
import chatMessages from './data/messages.json';

const App = () => {
  // const [, setBoardsData] = useState([]);

  // const messageLog = () => {
  //   return (
  //     chatMessages
  //   )
  // }
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <div className="messageContainer">
          <ChatEntry
            sender={chatMessages.sender}
            body={chatMessages.body}
            timeStamp={chatMessages.timeStamp}
            // {messageLog}
          ></ChatEntry>
        </div>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
