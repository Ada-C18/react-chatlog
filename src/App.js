import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const intitialCopy = chatMessages.map((message) => {
    // console.log(`HERE:`, { intitialCopy });
    return { ...message };
  });
  // console.log(`NOW HERE:`, { intitialCopy });
  const [messagesList, setMessagesList] = useState(intitialCopy);
  // console.log(messagesList);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messagesList}></ChatLog>
        {/* <ChatEntry
          // messagesList={messagesList}
          // id={chatMessages.id}
          sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timeStamp={chatMessages[0].timeStamp}
          // liked={chatMessages.liked}
        ></ChatEntry> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
