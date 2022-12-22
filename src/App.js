import React from 'react';
import { useState } from 'react';

import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messagesList, setMessageList] = useState(chatMessages);

  const [likesCount, setLikesCount] = useState(0);

  const updateMessages = (messageToUpdate) => {
    const newMessageList = messagesList.map((message) => {
      if (messageToUpdate.id === message.id) {
        return messageToUpdate;
      } else {
        return message;
      }
    });
    setMessageList(newMessageList);
  };

  function incrementCount() {
    let currentCount = likesCount + 1;
    setLikesCount(currentCount);
  }

  const decreaseCount = () => {
    let currentCount = likesCount - 1;
    setLikesCount(currentCount);
  };

  return (
    <div id="App">
      <header>
        {/* TODO: add names instead of hardcoding */}
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <div className="widget" id="heartWidget">
            {likesCount} ❤️s{' '}
          </div>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        {/* <ChatEntry
          body={testMessage.body}
          sender={testMessage.sender}
          timeStamp={testMessage.timeStamp}
         /> */}

        {/* Wave 02: Render ChatLog component  */}
        <ChatLog
          entries={messagesList}
          onUpdateMessages={updateMessages}
          incrementCount={incrementCount}
          decreaseCount={decreaseCount}
        />
      </main>
    </div>
  );
};

export default App;
