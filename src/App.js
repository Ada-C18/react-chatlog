import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';
import ChatLog from './components/ChatLog';
console.log(chatMessages)


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>

      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <h2>
          <ChatLog entries={chatMessages[2].sender} />
        </h2>
        <ChatEntry sender='Vladimir' body='why are you arguing with me' timeStamp='2018-05-29T22:49:06+00:00' />
      </main>

    </div>
  );
};

export default App;
