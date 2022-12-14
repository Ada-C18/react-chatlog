import React from 'react';
import './App.css';

import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatMessagesData = chatMessages.map((chatMessage) => {
    return (
      <li>
        <ChatEntry
          sender={chatMessage.sender}
          body={chatMessage.body}
          timeStamp={chatMessage.timeStamp}
        />
      </li>
    );
  });

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {chatMessagesData}
      </main>
    </div>
  );
};

export default App;
