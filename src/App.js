import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat App</h1>
      </header>
      <main>
        {
        <ChatEntry chatMessages={chatMessages} />
        /* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
