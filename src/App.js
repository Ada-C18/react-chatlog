import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';


const App = () => {
  const initialCopy = chatMessages.map((bike) => {
    return { ...bike };
  });
  
  const [chatMessagesData, setChatMessagesData] = useState(initialCopy);
  const [countLikes, setCountLikes] = useState(0);
  console.log(chatMessagesData);
  const updateLikes = (messageToUpdate)=>{
    const messages = chatMessagesData.map((message)=>{
    if (message.id === messageToUpdate.id){
      return messageToUpdate;
    }
    return message;
  });
  setChatMessagesData(messages);
  if (messageToUpdate.liked){
    setCountLikes(countLikes+1);
  }
  
}

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <p>{countLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={chatMessagesData} handleLikes={updateLikes} />

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
