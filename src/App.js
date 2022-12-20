import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* tried 
        const messages = chatMessages.map(message => etc, can't seem to get it to work) */}
        {chatMessages.map((message) => (
          <ChatEntry
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
          ></ChatEntry>
        ))}
      </main>
    </div>
  );
};






export default App;
