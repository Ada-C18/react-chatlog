import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';
import chatMessages from './data/messages.json';

const specialMessage = chatMessages[0];
const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          sender={specialMessage.sender}
          body={specialMessage.body}
          timeStamp={specialMessage.timeStamp}
        />
        <TimeStamp />
      </main>
    </div>
  );
};

export default App;
