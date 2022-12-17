import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
const LOG = [
  {
    id: 1,
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00',
  },
  {
    id: 2,
    sender: 'Estragon',
    body: 'Because you are wrong.',
    timeStamp: '2018-05-29T22:49:33+00:00',
  },
  {
    id: 3,
    sender: 'Vladimir',
    body: 'because I am what',
    timeStamp: '2018-05-29T22:50:22+00:00',
  },
  {
    id: 4,
    sender: 'Estragon',
    body: 'A robot.',
    timeStamp: '2018-05-29T22:52:21+00:00',
  },
  {
    id: 5,
    sender: 'Vladimir',
    body: 'Notabot',
    timeStamp: '2019-07-23T22:52:21+00:00',
  },
];

const specialMessage = chatMessages[0];
const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <ChatEntry */}
        {/* sender={specialMessage.sender} */}
        {/* body={specialMessage.body} */}
        {/* timeStamp={specialMessage.timeStamp} */}
        {/* /> */}
        <ChatLog chats={chatMessages} />
      </main>
    </div>
  );
};

export default App;
