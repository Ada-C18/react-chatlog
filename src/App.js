import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  console.log(chatMessages);
  const [likes, numLikes] = useState(0);
  const updateLikes = (clicked, numLike) => {
    // condition ? expression1 : expression2
    numLike(!clicked);
    if (!clicked) {
      // heartStateReport(heartCount +1)
      numLikes((count) => count + 1);
    } else {
      // heartStateReport(heartCount -1)
      numLikes((count) => count - 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <div>
          <p>{likes} ❤️s</p>
        </div>
      </header>
      <main>
        {/* <div className='chat-entry local'>
          {ChatEntryComp} */}
        <ChatLog entries={chatMessages} updateLikes={updateLikes} />
        {/* <ChatLog 
          heartChange={heartChange}
          entries={chatMessages}
          />
        </div> */}
      </main>
    </div>
  );
};

export default App;
