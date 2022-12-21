import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
// import ColorChoice from './components/ColorChoice';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);

  const calculateTotalLikes = (chatData) => {
    return chatData.reduce((total, entry) => {
      if (entry.liked) {
        total += 1
      }
      return total;
    }, 0)
  };

  const totalLikeCount = calculateTotalLikes(chatData);

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

  const senderOne = chatMessages[0].sender;
  const senderTwo = chatMessages[1].sender;

  return (
    <div id="App">
      <header>
        <h1>Chat between {senderOne} and {senderTwo}</h1>
        <div>Total Likes: {totalLikeCount} ❤️s</div>
        {/* <span className='colorButtons'> */}
          <div className='senderOne'>
            <h2>{senderOne}'s color:</h2>
            {/* <ColorChoice/> */}
          </div>
          <div className='senderTwo'>
            <h2> {senderTwo}'s color:</h2>
            {/* <ColorChoice/> */}
          </div>
        {/* </span> */}
      </header>
      <main>
          <ChatLog entries={chatData} onUpdateChatData={updateChatData} />
      </main>
    </div>
  );
};

export default App;
