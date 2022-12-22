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

  const clickLike = (id) => {
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

  const countLikes = (chatData) => {
    return chatData.reduce((total, message) => {
      return message.liked ? (total += 1) : total;
    }, 0);
  };

  const totalLikes = countLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>Beep Boop</h1>
        <h3>🤍{totalLikes}🤍</h3>
      </header>
      <main>
        <ChatLog entries={chatData} clickLike={clickLike}></ChatLog>
      </main>
    </div>
  );
};



export default App;
