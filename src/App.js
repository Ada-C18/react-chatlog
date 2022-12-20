import React, { useState } from 'react';
import './App.css';
import entries from './data/messages.json';
import ChatLog from './components/ChatLog';

// our code from snow leopards
const App = () => {
  const[chatData, setChatData] = useState(entries);

  const likeMessage = (id) => {
    setChatData(chatData => chatData.map(chat => {
      if(chat.id === id) {
        return{...chat, likeCount: chat.likeCount + 1};
      } else {
        return chat;
      }
    }));
  };

  const calculateTotalLikes = (chatData) => {
    return chatData.reduce((total, chat) => {
      if(chat.liked){
        total += 1;
      }
      return total;
    }, 0)
  };

  console.log(likeMessage);


  return(
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog 
          entries={entries} 
          onLikeMessage={likeMessage}
        />
      </main>
    </div>
  );
};


export default App;
