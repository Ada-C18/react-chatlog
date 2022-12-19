import React, { useState } from 'react';
import './App.css';
//import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const entries = chatMessages;
  const entriesCopy = chatMessages.map((entry) => {
    return { ...entry };
  });

  const [entries, setEntries] = useState(entriesCopy);

  // const sampleChatData = {
  //   id: 1,
  //   sender: 'Vladimir',
  //   body: 'why are you arguing with me',
  //   timeStamp: '2018-05-29T22:49:06+00:00',
  //   liked: false,
  // };

  const updateEntries = (updatedEntry) => {
    // takes in an updated task
    const updatedEntries = entries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setEntries(updatedEntries);
    console.log(updatedEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>Aly's Chatbot</h1>
      </header>
      <main>
        <ChatLog entries={entries} updateEntries={updateEntries} />
        {/* <ChatEntry
          sender={entries.sender}
          body={entries.body}
          timeStamp={entries.timeStamp}
        /> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
