import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const messageList = chatMessages[0];
  // console.log(messageList);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender={messageList.sender}
          body={messageList.body}
          timeStamp={messageList.timeStamp}
        ></ChatEntry>
      </main>
    </div>
  );
};

export default App;
