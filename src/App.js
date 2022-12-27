import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);

  const updateMessageData = updatedMessage => {
    const messages = messageData.map(message => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setMessageData(messages);
  };

  const assignUniqueIdToSender = returnedMessage => {
    if (returnedMessage.sender === 'Estragon') {
      return 1
    } else {
      return 0
    }
  };


  const calcTotalLikes = chatMessages => {
    return chatMessages.reduce((total, message)=> {
      return total + message.liked
    }, 0);
  };

  const totalLikeCount = calcTotalLikes(messageData);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2>{totalLikeCount} ❤️s</h2>
        </section>
      </header>
      <main>
        {/*Wave 02: Render ChatLog component */}
        {/* components are the tags and props are the attributes */}
        <ChatLog
        entries={messageData}
        onUpdateMessage={updateMessageData}
        onVerifySender={assignUniqueIdToSender}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
