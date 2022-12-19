import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
      </header>
      <main>
        {/* <ChatEntry
        sender = {chatMessages[0].sender}
        body = {chatMessages[0].body}
        timeStamp= {chatMessages[0].timeStamp}
        /> */}

        <ChatLog

        sender = {chatMessages.sender}
        body = {chatMessages.body}
        timeStamp= {chatMessages.timeStamp}
        
        />
        
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatLog>
        
      

        {/* <DogList 
        dogData={dogData}
        onPetDog={petDog}
        onUnregister={unregisterDog}
      /> */}
      </main>
    </div>
  );
  
};

export default App;
