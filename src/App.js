import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // console.log(chatMessages);
  // const messageList = chatMessages[0];

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;

//   sender={messageList.sender}
//   body={messageList.body}
//   timeStamp={messageList.timeStamp}
// ></ChatEntry>
