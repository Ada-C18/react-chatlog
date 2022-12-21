import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const messages = chatMessages.map((message) => {
  //   return {message};
  // });

  const [entries, setEntries] = useState(chatMessages);

  const likeMessage = (id) => {
    // const newEnteries = entries.map((entry) => {
    //   if (entry.id === id) {
    //     return {...entry, like: !entry.liked}
    //   } else {
    //     return entry;
    //   }
    // })
    // setEntries(newEnteries);
    // // console.log(`liked ${entries.like}`)
    
    setEntries((preEntery) => {
      const newEnteries = preEntery.map((entry) => {
        if (entry.id === id) {
              return {...entry, liked: !entry.liked}
            } else {
              return entry;
            }
      })
      return newEnteries
    }) 
    // console.log(`likeMessage ${id}`)
  }

  const totalLikes = entries.reduce((total, entry) => {
    if (entry.liked === true) {
      total += 1;
    }
    return total
  }, 0) 

  return (
    <div id="App">  
      <header>
        <h1>Application title</h1>
        <h2>Total Likes: {totalLikes} ❤️s</h2>
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
