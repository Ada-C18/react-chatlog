import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const messageData = {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
    liked: false
  };

  return (
    <div id="App">
      <header>
        <h1>ChatLog</h1>
      </header>
      <main>
        
        <div><ChatEntry message = {messageData}></ChatEntry></div>
        
      </main>
    </div>
  );
};

export default App;
