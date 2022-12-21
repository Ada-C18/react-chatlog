import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import LikeCounter from './components/LikeCounter'

const App = () => {
  const logCopy = chatMessages.map((messages)=> {return {...messages}})
  const [messages,changeMessages] = useState(logCopy)
  const [likes,updateLikes] = useState(0)


  const countLikes = (mg) => {
    let likeCount = 0
    for (const msg of mg) {
      if (msg.liked===true){
        likeCount++
    }
  } updateLikes(likeCount)
}


  const toggleLike = (id) => {
    const newLog = []
    
    for (const msg of messages) {
      if (msg.id !== id) {
        newLog.push(msg)
      }
      else {
        const newMsg = {
          ...msg,
          liked:!msg.liked
        } 
        newLog.push(newMsg)}
      
      
    } changeMessages(newLog)
    countLikes(newLog) //yes, this could be baked into the function to save a loop but the logic is clearer as 2 functions
    
  }
  return (
    <div id="App">
      <header>
        <h1>Vlad's chat log</h1>
        <LikeCounter count={likes}></LikeCounter>
      </header>
      <main>
        
        {/* <ChatEntry sender='Me' body='Hello' timeStamp='2018-05-29T22:49:06+00:00'/> */}
        <ChatLog entries={messages} toggleLike={toggleLike}/>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
