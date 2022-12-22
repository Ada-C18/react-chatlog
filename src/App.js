import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages)
  const [likeCount, setLikeCount] = useState(0);
  
  const heartLikeCount = (id) => {
    let likeCount = 0;
    const newChatEntries = chatEntries.map((ChatEntry) => {
      const newChatEntry = {...ChatEntry};
      if (newChatEntry.id === id){
        newChatEntry.liked = !newChatEntry.liked
      }
      if (newChatEntry.liked === true){
        likeCount += 1;
      }
      return newChatEntry
    });
    setChatEntries(newChatEntries);
    setLikeCount(likeCount)
  }
  return (
    <div id="App">
      <header>
        <h1>Robot and Human chat</h1>
        <p>{likeCount} ❤️s</p>
        <button className="like"></button>
      </header>
      <main>
      <ChatLog entries = {chatMessages} likesCountCallBack =  {heartLikeCount}/>
  
      
      </main>
    </div>
  );
};

export default App;
