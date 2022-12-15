import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
// import chatMessages from './data/messages.json';
const chatMessages = [
  {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
    liked: false
  }
]


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry chatMessages={chatMessages}/>
      </main>
    </div>
  );
};

export default App;
