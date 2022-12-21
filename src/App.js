import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessageData] = useState(chatMessages);
  const [likesCount, setLikesCount] = useState(0);

  const updateMessageData = (mId) => {
    //is this a map of messages piece of state or chatMessages.json file
    // const newChatMessages = chatMessages.map((ChatMessage) => {
    //   if (ChatMessage.id === mId) {
    //     let newMessage = ChatMessage;
    //     // updateLikes(newMessage);
    // const updateMessageData = (id) => {
    const newChatMessages = [...messages];
    // const newMessage = newChatMessages.find((message) => message.id === mId);
    for (let thisMessage of newChatMessages) {
      if (thisMessage.id === mId) {
        let newMessage = thisMessage;
        if (!newMessage.liked) {
          newMessage.liked = true;
          setLikesCount(likesCount + 1);
        } else if (newMessage.liked) {
          newMessage.liked = false;
          setLikesCount(likesCount - 1);
        }
      }
    }
    setMessageData([...newChatMessages]); //reads in updated value of each entry in object
  };
  // });

  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon</h1>
        <h2>{likesCount} ❤️s</h2>
      </header>
      <main>
        {/* sends current state of messages as properties to chatLog.js along with update function */}
        <ChatLog entries={messages} onUpdateMessage={updateMessageData} />
      </main>
    </div>
  );
};
export default App;

// {/* Here's the first chat Message */}
//         {/* <chatMessages></chatMessages> */}
//         {/* <ChatEntry
//         sender={oneMessage.sender}
//         body={oneMessage.body}
//         timestamp={oneMessage.timeStamp}
//       ></ChatEntry> */}
