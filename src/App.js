import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const messageData = [
  {
    id: 1,
    sender:'Vladimir',
    body:'why are you arguing with me',
    timeStamp:'2018-05-29T22:49:06+00:00',
    liked: false
  },
  {
  id: 2,
    sender:'Estragon',
    body:'Because you are wrong.',
    timeStamp:'2018-05-29T22:49:33+00:00',
    liked: false
  },

]

const App = () => {
  
  // const messageData = chatMessages[0]
  return (
    <div id="App">
      <header>
        <h1>Smart ChatBot</h1>
      </header>
      <main>
      {/* <ChatEntry sender={messageData.sender} body={messageData.body} timeStamp={messageData.timeStamp} liked={messageData.liked}/> */}
      <ChatLog 
        entries={chatMessages}
      />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
