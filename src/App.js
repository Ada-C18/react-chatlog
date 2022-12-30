import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
      {/* <ChatEntry
        sender="Joe Biden"
        body="Get out by 8am.  I'll count the silverware"
        timeStamp="2018-05-18T22:12:03Z"
      /> */}
      <ChatLog entries={chatEntries}/>
      </main>
    </div>
  );
};

export default App;
