import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        {console.log(chatMessages[0]['timeStamp'])}
      </header>
      <main>
        <ChatEntry
          sender="Jessica"
          body="Hello World!"
          timeStamp="2018-05-29T22: 49:06+00:00"
        />
        <ChatEntry
          sender="Alma"
          body="Hello World!"
          timeStamp="2018-05-29T22: 49:06+00:00"
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
