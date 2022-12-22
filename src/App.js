import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);
  const [likes, setLikes] = useState(0);

  return (
    <div id="App">
      <header>
        <h1>Robot v. Robot 🤖 </h1>
        <h2>{likes} </h2>
      </header>
      <main>
        <ChatLog entries={entries} />
      </main>
    </div>
  );
};

export default App;
