import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const ChatEntryComp = chatMessages.map((chat) => (
    <ChatEntry 
    sender={chat.sender}
    body = {chat.body}
    timeStamp = {chat.timeStamp}
    />
  ));

  const [heartCount, heartStateReport] = useState(0);
  const heartChange = (colorChange) => {
    // count the num of likes of heartChange  is clicked and report heartStateReport when a chatMessage is clicked
    // condition ? expression1 : expression2
    if (heartStateReport(colorChange)){
      heartStateReport(heartCount +1)

    }else{
      heartStateReport(heartCount -1)
    }

};


    
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <div>{heartCount} ❤️s</div>
      </header>
      <main>
        <div className='chat-entry local'>
          {ChatEntryComp}
        <ChatLog entries={chatMessages}/>
        <ChatLog 
          heartChange={heartChange}
          entries={chatMessages}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
