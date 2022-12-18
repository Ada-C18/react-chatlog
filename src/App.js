import { useState, useEffect } from "react";
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';


// const INITIAL_CAHT = {chatMessages}
const INITIAL_CAHT = [
  {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
    liked: false,
  },
  {
    id: 2,
    sender: 'Estragon',
    body: 'Because you are wrong.',
    timeStamp: '2018-05-29T22:49:33+00:00',
    liked: false,
  },
];

const App = () => {
  const initialCopy =  {...INITIAL_CAHT };

  console.log('initialCopy',initialCopy)
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        
        
        <ChatLog initialCopy={initialCopy} />
      </main>
    </div>
  );
};

export default App;
