import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

const chatMessagesList = () => {
  let messages = chatMessages.map((d) => {
    return (
      ChatEntry(d)
    )
  })
  return messages
};

const App = () => {

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {chatMessagesList()}
        

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
