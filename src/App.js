import { useState} from 'react';
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const entries = { chatMessages };



const App = () => {
  // const initialCopy =  chatMessages.map((chat)=>{
  //   return {...chat};
  // });

  // const [chatMessages, setChatMessage] = useState(initialCopy);
  // const [countLikes, setCountLikes] = useState(0);

  // const updateLikes = (message) => {

  // }

  // console.log('initialCopy',initialCopy)
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* **** wave 1 **** */}
        {/* <ChatEntry sender={chatEntry}/> */}
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
