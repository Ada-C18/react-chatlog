import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  // const messageData = {
  //   id: 1,
  //   sender: 'Vladimir',
  //   body: 'why are you arguing with me',
  //   timeStamp: '2018-05-29T22:49:06+00:00',
  //   liked: false
  // };

  
  

  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
      </header>
      <main>
        <ChatLog entries = {chatMessages}></ChatLog>
        {/* <div><ChatEntry 
        sender = {messageData.sender}
        body = {messageData.body}
        timeStamp = {messageData.timeStamp}
        ></ChatEntry></div> */}
        
        
      </main>
    </div>
  );
};

export default App;
