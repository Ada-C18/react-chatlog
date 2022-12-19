import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  
  return (
    <div id="App">
      <header>
        <h1>Chat Log Vladmir and Estragon</h1>
        <h2>❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages}/>
      </main>
    </div>
  );
};

export default App;