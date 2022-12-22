import { useState } from 'react';
import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'

const App = () => {
  // const messages = chatMessages.map((message) => (
  //   <ChatEntry
  //     sender={message.sender}
  //     body={message.body}
  //     timeStamp={message.timeStamp}
  //     liked={message.liked}
  //   ></ChatEntry>
  // ))
  // const messages = <ChatLog entries={chatMessages}></ChatLog>  
  
  const [chatData, setChatData] = useState(chatMessages);

  const clickLike = () => {
    setChatData((chatData) =>
    chatData.map((message) => {
      if (message.id === id) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    })
    );
  };
  return (
    <div id="App">
      <header>
        <h1>Beep Boop</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages}></ChatLog>
      </main>
    </div>
  );
};



export default App;
