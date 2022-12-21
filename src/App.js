import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';


const App = () => {
  const messages = chatMessages.map((message) => {
    return {message};
  });

  const [chatData, setChatData] = useState(messages);

  return (
    <div id="App">  
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry />
      </main>
    </div>
  );
};

export default App;
