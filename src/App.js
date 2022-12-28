import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

//<ChatEntry
          //sender={chatMessages[0].sender}
          //body={chatMessages[0].body}
          //timeStamp={chatMessages[0].timeStamp}
        ///>
const App = () => {
  const[likesCount,setLikeCount]=useState(0);
  const updateLikes=(isLike)=>{
    if (isLike){
      setLikeCount(likesCount+1);
    } else {
        setLikeCount(likesCount-1)

    }
}
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladmir and Estragon</h1>
        <h2>{likesCount}🤍s</h2>
        <h3>ChatLog</h3>
      </header>
      <main>
        <ChatLog entries={chatMessages}updateLikes={updateLikes}
        />
        {/* Chatlog
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
