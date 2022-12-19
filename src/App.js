import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {
          // Wave 01: Render one ChatEntry component
          // <ChatEntry
          //   sender={chatMessages[0].sender}
          //   body={chatMessages[0].body}
          //   timeStamp={chatMessages[0].timeStamp}
          // ></ChatEntry>

          // Wave 02: Render ChatLog component
          <ChatLog entries={chatMessages}></ChatLog>
        }
      </main>
    </div>
  );
};

export default App;
