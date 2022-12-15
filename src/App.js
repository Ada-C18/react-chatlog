import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  // const messages = {
  //   id: 1,
  //   sender: 'Vladimir',
  //   body: 'why are you arguing with me',
  //   timeStamp: '2018-05-29T22:49:06+00:00',
  //   liked: false,
  // };

  const entries = chatMessages;
  console.log(entries);
  return (
    <div id="App">
      <header>
        <h1>Chat Log Application</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entries}></ChatLog>
        {/* <ChatEntry
          sender={messages.sender}
          body={messages.body}
          timeStamp={messages.timeStamp}
        ></ChatEntry> */}
      </main>
    </div>
  );
};

export default App;
