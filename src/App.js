import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';

// App.js
const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Vladimir and Estragon messages</h1>
      </header>
      <main>
        <ChatEntry
          sender="Vladimir"
          body="why are you arguing with me"
          timeStamp="2018-05-29T22:49:06+00:00"
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
