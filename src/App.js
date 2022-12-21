import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [chatData, setChatData] = useState(chatMessages)
  const [totalLikes, setTotalLikes] = useState(0)

  

  const updateChatData = (liked, id) => {
    const entries = chatData.map((entry) => {
      if (entry.id ===id) {
        return {...entry, liked}
      }
      return entry;
    })
    const newTotalLikes = entries.reduce((acc, obj) => {
      if (obj.liked) {
        acc += 1;
      }
      return acc;
    }, 0)
    setChatData(entries);
    setTotalLikes(newTotalLikes);
  }

  console.log(chatData)
  

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatData[0]['sender']} and {chatData[1]['sender']}</h1>
        <h2> {totalLikes} ❤️s </h2>
      </header>
      <main>
        <ChatLog
        entries= {chatData} 
        updateChatData= {updateChatData}
        />
      </main>
    </div>
  );
  };

export default App;
