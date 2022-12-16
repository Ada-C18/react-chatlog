import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

// const messageData = [
//   {
//     id: 1,
//     sender:'Vladimir',
//     body:'why are you arguing with me',
//     timeStamp:'2018-05-29T22:49:06+00:00',
//     liked: false
//   },
//   {
//   id: 2,
//     sender:'Estragon',
//     body:'Because you are wrong.',
//     timeStamp:'2018-05-29T22:49:33+00:00',
//     liked: false
//   },

// ]

const App = () => {
  const initialCopy = chatMessages.map(message => {
    return {...message};
  })
  //1 make deep copy of initial chat Messages
  const [ messageList, setMessagesList ] = useState(initialCopy);

  //2 set callback function to update the messageList to true/false for likes
  const updateLikes = (id) => {
    console.log('updateLikes function from App.js is called')
    const newMessageList = [];
    for (const message of messageList) {
      if(message.id !== id) {
        newMessageList.push(message);
      } else {
        const newMessage = {
          ...message,
          liked: !message.liked
        };
        console.log('newMessage.liked',newMessage.liked)
        newMessageList.push(newMessage)
      }
    }
    setMessagesList(newMessageList);
  };

  ///to calculate the total likes
  let likeCount = 0
  for (let key of messageList) {
    if (key.liked === true) {
      likeCount+=1
    }
  }
  // const messageData = chatMessages[0]
  return (
    <div id="App">
      <header>
        <h1>Smart ChatBot</h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
      {/* <ChatEntry sender={messageData.sender} body={messageData.body} timeStamp={messageData.timeStamp} liked={messageData.liked}/> */}
      <ChatLog 
        entries={chatMessages}
        updateLikes={updateLikes}
      />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
