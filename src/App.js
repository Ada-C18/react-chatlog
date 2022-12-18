import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component 
     The App component passes this data to the ChatEntry component as props */}
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
