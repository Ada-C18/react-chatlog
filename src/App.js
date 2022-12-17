import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const [messages, setMessages] = useState(chatMessages[0]);
  // const something = messages.map((message) => {});
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <div>
          <ChatEntry
            sender={messages.sender}
            body={messages.body}
            timeStamp={messages.timeStamp}
          />
          {/* {messages.map((message) => (
            <ChatEntry
              sender={message.sender}
              body={message.body}
              timeStamp={message.timeStamp}
            />
          ))} */}
        </div>
      </main>
    </div>
  );
};

export default App;
