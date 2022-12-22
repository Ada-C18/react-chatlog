import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [updatedChatLog, setUpdatedChatLog] = useState(chatMessages);

  const updateChatMessages = (id) => {
    const messages = updatedChatLog.map((msg) => {
      if (msg.id === id) {
        return { ...msg, liked: !msg.liked };
      }
      return msg;
    });
    setUpdatedChatLog(messages);
  };

  const displayNumHearts = updatedChatLog.filter(
    (msg) => msg.liked === true
  ).length;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{displayNumHearts} ❤️s</h2>
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
