import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'
import ChatEntry from './components/ChatEntry';


const App = () => {
  // const messages = chatMessages.map((message) => {
  //   return {message};
  // });

  const [entries, setEntries] = useState(chatMessages);

  return (
    <div id="App">  
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entries}/>
      </main>
    </div>
  );
};

export default App;
