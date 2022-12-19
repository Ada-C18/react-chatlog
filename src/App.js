import React from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
import ChatEntry from './components/ChatEntry';
// import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog';

const App = () => {
  const messages = chatMessages;

  // const [likesCount, updateLikes] = useState(0);
  // const increaseLikes = () => {
  //   updateLikes(likesCount + 1);
  // };
  // const heartCount = increaseLikes();

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon </h1>
        {/* <h3> ❤️ </h3> */}
      </header>
      <main>
        <ChatLog chats={messages} />

        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
