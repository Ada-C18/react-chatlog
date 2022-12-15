import React, { useState } from 'react';
import './App.css';

import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [updatedChatLog, setUpdatedChatLog] = useState(chatMessages);

  const updateChatMessages = (chatMessageToUpdate) => {
    const messages = updatedChatLog.map((msg) => {
      if (msg.id === chatMessageToUpdate.id) {
        return chatMessageToUpdate;
      }
      return msg;
    });
    setUpdatedChatLog(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}

        <ChatLog
          entries={updatedChatLog}
          onUpdateChatMessages={updateChatMessages}
        />
      </main>
    </div>
  );
};

export default App;
