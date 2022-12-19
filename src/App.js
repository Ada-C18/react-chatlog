import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
        {/* The "entries" here should match the entries in line 6 in ChatLog.
        <if we don't have props, it will only pass ChatMessages and won't pass the data from test/>
         */}
      </main>
    </div>
  );
};

export default App;
