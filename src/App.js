import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry  from './components/ChatEntry';
import ChatLog from './components/ChatLog';


const App = () => {
  // const chatMessages1 = [{
  //   sender:'Vladimir',
  //   body:'why are you arguing with me',
  //   timeStamp:'2018-05-29T22:49:06+00:00',
  // }]
  // create a function that brings the sender 
    return (
    <div id="App">
      <header>
        <h1>Welcome to the Chat!</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages}> </ChatLog>
      {/* <ChatEntry sender={chatMessages[0].sender} body={chatMessages[0].body} timeStamp={chatMessages[0].timeStamp}/> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
