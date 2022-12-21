import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog';

const App = () => {
  const firstCopy = chatMessages.map(chat => {
    return {...chat};
    } );



  const [likeCount, setLikeCount] = useState(0);
  const updateLikes = () => {
      setLikeCount(likeCount+1);
  };

 
  return (
    <div id="App">
      <header>
        <h1>Interesting Conversations</h1> <br />
        <span> ❤️  </span> <span id="setlike" > 0 </span>
      </header>
      <main>
        {/* <ChatEntry chatMessagesList={chatMessages} */}
        
        <ChatLog entries={firstCopy} />
        
        {/* /* Wave 01: Render one ChatEntry component */}
      </main>
    </div>
  );
};

export default App;
