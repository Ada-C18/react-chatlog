import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const messageDataList = chatMessages;

const App = () => {
  const [messageData, setMessageData] = useState(messageDataList);
  /*Create a helper function to wrap up setMessageData in such a way that a particular id as liked */
  /*Update like status that takes in an id and the status to true or false. Pass the helper function as prop,
  in the event helper call the helper function-- like petCats() */

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}

        <ChatLog chatEntryData={messageData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
