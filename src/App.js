import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

// define local user
const klocalUser = 'Vladimir'

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* {<ChatEntry sender={chatMessages[0].sender} body={chatMessages[0].body} timeStamp={chatMessages[0].timeStamp} /> */}
        <ChatLog entries={chatMessages} localUser={klocalUser} />
      </main>
    </div>
  );
};

export default App;
