import React, { useState, useEffect } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

// define local user
const klocalUser = 'Vladimir'

const App = () => {
  // store chatLogs as piece of state
  const [chatLogs, setChatLogs] = useState(chatMessages);
  const [totalLikes, setTotalLikes] = useState(0);

  // count total number of likes whenever logs change
  useEffect(() => { likeCounter() }, [chatLogs]);

  const likeCounter = () => {
    const likeCount = (chatLogs.filter(log => (log.liked))).length;
    setTotalLikes(likeCount);
  };

  const updateData = (updatedMessage) => {
    const updatedLogs = () => chatLogs.map(log => {
      if (log.id == updatedMessage.id) {
        return updatedMessage;
      } else {
        return log;
      }
    });
    setChatLogs(updatedLogs());
  };



  return (
    <div id="App">
      <header>
        <h1>{klocalUser}'s Phone</h1>
        {/* <h2> Total Likes: {Array(totalLikes).fill('❤️')}</h2> */}
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={chatLogs}
          localUser={klocalUser}
          onLike={updateData} />
      </main>
    </div>
  );
};

export default App;
