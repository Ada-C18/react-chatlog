import { React, useState, useEffect } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  // const chatData = {
  //   id: 1,
  //   sender: 'Vladimir',
  //   body: 'why are you arguing with me',
  //   timeStamp: '2018-05-29T22:49:06+00:00',
  //   liked: false,
  // };
  const [newChatMessages, setChatMessage] = useState([]);

  const fetchMessages = () => {
    const chatMessagesCopy = chatMessages.map((message) => {
      return {
        id: message.id,
        sender: message.sender,
        body: message.body,
        timeStamp: message.timeStamp,
        liked: message.liked,
      };
    });
    console.log(chatMessagesCopy);
    setChatMessage(chatMessagesCopy);
  };

  useEffect(fetchMessages, []);

  const updateChatData = (updatedMessage) => {
    const messages = newChatMessages.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    addToLikeCounter(updatedMessage);
    console.log(messages);
    setChatMessage(messages);
  };

  const [likeCounter, addLike] = useState(0);

  const addToLikeCounter = (message) => {
    if (message.liked === true) {
      addLike(likeCounter + 1);
    } else {
      addLike(likeCounter - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Awkward Tinder Convo</h1>
        <h3>{likeCounter} ❤️s</h3>
      </header>
      <main>
        <ChatLog
          entries={newChatMessages}
          onMessageUpdate={updateChatData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
