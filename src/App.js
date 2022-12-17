import React from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [likesCount, updateLikesCount] = useState(0);
  const increaseLikes = () => {
    updateLikesCount(likesCount + 1);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon </h1>
        <h3> hearts display </h3>
      </header>
      <main>
        {chatMessages.map((chat, i) => {
          return (
            <ChatEntry
              key={chatMessages[i].id}
              sender={chatMessages[i].sender}
              body={chatMessages[i].body}
              timeStamp={chatMessages[i].timeStamp}
              liked={chatMessages[i].false}
            />
          );
        })}
        ;
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
