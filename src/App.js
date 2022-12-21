import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry />
        <ChatLog />
        <ChatEntry
          sender={chatMessages[0]['sender']}
          body={chatMessages[0]['body']}
          timeStamp={chatMessages[0]['timeStamp']}
        />
        <ChatEntry
          sender={chatMessages[1]['sender']}
          body={chatMessages[1]['body']}
          timeStamp={chatMessages[1]['timeStamp']}
        />
        <ChatLog id={chatMessages[1]['id']} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}{' '}
      </main>
    </div>
  );
};

export default App;
