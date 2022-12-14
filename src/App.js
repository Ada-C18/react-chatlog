import React from 'react';
import './App.css';
//import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const entries = chatMessages;
  // const sampleChatData = {
  //   id: 1,
  //   sender: 'Vladimir',
  //   body: 'why are you arguing with me',
  //   timeStamp: '2018-05-29T22:49:06+00:00',
  //   liked: false,
  // };

  return (
    <div id="App">
      <header>
        <h1>Aly's Chatbot</h1>
      </header>
      <main>
        <ChatLog entries={entries} />
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
