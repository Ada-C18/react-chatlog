import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
//import ChatEntry from './components/ChatEntry';

//const [uniqueUsers, getUniqueUsers] = useState(0);
const uniqueUsers = [];
const getUniqueUsers = () => {
  for (let singleChatHistory of chatMessages) {
    //console.log(chatHistory.sender)
    if (!uniqueUsers.includes(singleChatHistory.sender)) {
      uniqueUsers.push(singleChatHistory.sender);
    }
  }
};
//console.log(uniqueUsers);

const App = () => {
  // Initialize the likedCounts state variable
  const [likedCounts, setLikedCounts] = useState(0); // state var. likedCounts = 0
  //console.log(likedCounts);

  // Updates the likedCounts based on liked
  const likeHandler = (liked) => {
    if (liked) {
      setLikedCounts(likedCounts + 1);
    } else {
      setLikedCounts(likedCounts - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>
          {' '}
          Chat between {getUniqueUsers()} {uniqueUsers[0]} and {uniqueUsers[1]}{' '}
        </h1>
        <h2> {likedCounts} ❤️s </h2>
      </header>
      <main>
        {/* pass lH as prop */}
        <ChatLog
          entries={chatMessages}
          uniqueSenders={uniqueUsers}
          onClick={likeHandler}
        />
      </main>
    </div>
  );
};

export default App;
