import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
// import { useState } from 'react';
const initialMessage = chatMessages.map((message) => {
  return { ...message };
});
const App = () => {
  // const [messageList, setMessagesList] = useState(initialMessage);
  // const updateLike = (id) => {
  //   const newMessageList = [];
  //   for (const message of messageList) {
  //     if (message.id !== id) {
  //       newMessageList.push(message);
  //     } else {
  //       const newMessage = {
  //         ...message,
  //         liked: !message.liked,
  //       };
  //       console.log(newMessage);
  //       console.log(newMessage.liked);
  //       newMessageList.push(newMessage);
  //     }
  //   }
  //   setMessagesList(newMessageList);
  // };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog initialMessage={initialMessage} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component  updateLikes={updateLike}*/}
      </main>
    </div>
  );
};

export default App;
