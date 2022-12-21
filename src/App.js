import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const entries = chatMessages;

  const [countLikes, setCountLikes] = useState(0);

  const updateLikesCount = (increment) => {
    if (increment) {
      setCountLikes(countLikes + 1);
    } else {
      setCountLikes(countLikes - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Log Application</h1>
        <section>
          <span className="widget" id="heartWidget">
            {countLikes} ❤️s
          </span>
        </section>
      </header>
      <main>
        <ChatLog
          entries={entries}
          likeCountCallBack={updateLikesCount}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
