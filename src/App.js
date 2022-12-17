import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // brain
  const [ChatData, setChatData] = useState(chatMessages);

  const NewMessage = (updatedMessage) => {
    const newdata = ChatData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setChatData(newdata);
  };
  const numlikes = ChatData.reduce((total, message) => {
    return total + message.liked;
  }, 0);

  // beauty
  return (
    <div id="App">
      <header>
        <h1>{numlikes}</h1>
      </header>
      <main>
        {/* <ChatEntry */}
        {/* sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timestamp={chatMessages[0].timeStamp}
        /> */}
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog messages={ChatData} updateMessage={NewMessage}></ChatLog>
      </main>
    </div>
  );
};

export default App;
