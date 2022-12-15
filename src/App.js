import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';
import ChatLog from './components/ChatLog';

// {
//   'id': 1,
//   'sender':'Vladimir',
//   'body':'why are you arguing with me',
//   'timeStamp':'2018-05-29T22:49:06+00:00',
//   'liked': false
// },
const App = () => {
  //const [chatMessagesData, setChatMessagesData] = useState(chatMessages);
  const testChat = {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
    liked: false,
  };
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {
          <ChatEntry chatMessages={testChat}></ChatEntry>
          /*Wave 02: Render ChatLog component */
        }
      </main>
    </div>
  );
};

export default App;
