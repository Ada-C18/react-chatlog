import React, { useState } from 'react';
import './App.css';
import allEntries from './data/messages.json';
import ChatLog from './components/ChatLog';

// our code from snow leopards
const App = () => {

  const [chatData, setChatData] = useState(allEntries);


  const likeMessage = (id) => {
    setChatData(chatData => chatData.map(entry => {
      if(entry.id === id) {
        return{...entry, likeCount: entry.likeCount + 1};
      } else {
        return entry;
      }
    }));
  };


  const calculateTotalLikes = (chatData) => {
    return chatData.reduce((total, entry) => {
      if(entry.liked){
        total += 1;
      }
      return total;
    }, 0)
  };

  const totalLikeTally = calculateTotalLikes(chatData)

  const updateChatData = (updatedChatData) => {
    const entries = chatData.map(entry => {
      if (entry.id === updatedChatData.id) {
        return updatedChatData
      } else {
        return entry
      };
    });
    setChatData(entries);
  };


  return(
    <div id="App">
      <header>
        <h1>Application title</h1>
        <div>Likes: {`${totalLikeTally} ❤️s`}</div>
      </header>
      <main>
        <ChatLog 
          entries={chatData} 
          onLikeMessage={likeMessage}
          onUpdateChatData={updateChatData}
        />
      </main>
    </div>
  );
};


export default App;
