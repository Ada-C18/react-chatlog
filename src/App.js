import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const chatMessagesInitialCopy = chatMessages.map((chat) => {
    return { ...chat };
  });

  const [chatsList, setChatsList] = useState(chatMessagesInitialCopy);
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}

        {/* <ChatEntry
          sender="Vladimir"
          body="why are you arguing with me"
          timeStamp="2018-05-29T22:49:06+00:00"
        /> */}
        {/*Wave 02: Render ChatLog component */}
        <ChatLog entries={chatsList} />
      </main>
    </div>
  );
};

export default App;
