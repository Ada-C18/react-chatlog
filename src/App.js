import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  console.log(chatMessages);
  const chatEntry = <ChatEntry></ChatEntry>;
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>{chatEntry}</main>
    </div>
  );
};

export default App;
