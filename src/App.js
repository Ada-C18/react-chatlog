import React from 'react';
import './App.css';
// import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messsagesjson from './data/messages.json'

const chatData = (messsagesjson)

const App = () => {
    
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <div className='App'>
        <ChatLog chatData={chatData}/>
        </div>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
