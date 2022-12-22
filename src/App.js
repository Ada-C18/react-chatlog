import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatLogEntries, setChatLogEntries] = useState(chatMessages);

  const updateChatEntry = (updatedChatEntry) => {
    setChatLogEntries(
      chatLogEntries.map((entry) =>
        entry.id === updatedChatEntry.id ? updatedChatEntry : entry
      )
    );
  };

  const [localUser, ...remoteUsers] = [
    ...new Set(chatLogEntries.map((entry) => entry.sender)),
  ];
  const totalLikes = chatLogEntries.reduce(
    (count, message) => count + (message.liked ? 1 : 0),
    0
  );
  return (
    <div id="App">
      <header>
        <h1>
          Chat between {localUser} and {remoteUsers}
        </h1>
        <section>
          <div className="widget" id="heartWidget">
            {totalLikes ? `${totalLikes} ❤️s` : ``}
          </div>
        </section>
      </header>
      <main>
        <ChatLog
          {...{
            entries: chatLogEntries,
            updateChatEntry,
            localUser,
          }}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
