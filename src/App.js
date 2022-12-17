import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatLogEntries, setChatLogEntries] = useState(chatMessages);

  const updateChatEntry = (updatedChatEntry) => {
    const entries = chatLogEntries.map((entry) =>
      entry.id === updatedChatEntry.id ? updatedChatEntry : entry
    );
    setChatLogEntries(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog
          entries={chatLogEntries}
          onUpdateChatEntry={updateChatEntry}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
