import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import { useState } from 'react';
import ChatLog from './components/ChatLog';
import Post from './components/Post';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';

const App = () => {
  const [likeCount, setLikeCount] = useState(0);
  const updateLikes = (num) => {
    console.log('Clicking button');

    setLikeCount(likeCount + num);
  };
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        {/* <ChatEntry></ChatEntry> */}
        <Post likeCount={likeCount}></Post>
        {/* <p className="top">{likeCount} 🤍's</p> */}
      </header>

      <main>
        {
          // Wave 01: Render one ChatEntry component
          // <ChatEntry
          //   sender={chatMessages[0].sender}
          //   body={chatMessages[0].body}
          //   timeStamp={chatMessages[0].timeStamp}
          // ></ChatEntry>

          // Wave 02: Render ChatLog component
          <ChatLog
            entries={chatMessages}
            updateLikeCallback={updateLikes}
          ></ChatLog>
        }
      </main>
    </div>
  );
};

export default App;
