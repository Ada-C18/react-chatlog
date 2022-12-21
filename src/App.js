import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {

  const [chatData, setChatData] = useState(chatMessages);

  // const updateEntryList = (updatedEntry) => {
  //   const entryList = chatMessages.map(entry => {
  //     if (entry.id === updatedEntry.id) {
  //       return updatedEntry;
  //     } else {
  //       return entry;
  //     }
  //   });

  //   setChatData(entryList);
  // }

  const likeEntry = (id) => {
    setChatData(chatData => chatData.map(entry => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    }));
  }

  const calcTotalLike = (chatData) => {
    return chatData.reduce((total, entry) => {
      return (entry.liked) ? total + 1: total;
    }, 0);
    // let total = 0;
    // for (let entry in chatMessages) {
    //   if (entry.liked) {
    //     total += 1;
    //   }
    // }
    // return total;
  };

  const totalLikes = calcTotalLike(chatData);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{totalLikes} ❤️s</section>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onClickLike={likeEntry}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
