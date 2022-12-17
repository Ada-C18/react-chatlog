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

  const userNames = [...new Set(chatLogEntries.map((entry) => entry.sender))];
  const totalLikes = chatLogEntries.reduce(
    (count, message) => count + (message.liked ? 1 : 0),
    0
  );

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {userNames[0]} and {[...userNames.slice(1)]}
        </h1>
        <section>
          <div className="widget" id="heartWidget">
            {totalLikes ? `${totalLikes} ❤️s` : ``}
          </div>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatLogEntries}
          onUpdateChatEntry={updateChatEntry}
          localUser={userNames[0]}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
