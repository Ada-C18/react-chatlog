import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
// import TimeStamp from './components/TimeStamp';
import chatMessages from './data/messages.json';

const App = () => {
  // const name = 'Chat between Vladimir and Estragon'


  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry sender={chatMessages[0].sender} body={chatMessages[0].body} timeStamp={chatMessages[0].timeStamp} ></ChatEntry> */}
        <ChatLog entries={chatMessages}></ChatLog>
        
       { /*Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
