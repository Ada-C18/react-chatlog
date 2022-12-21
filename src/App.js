import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';

const App = () => {
  const chatMessagesInitialCopy = chatMessages.map((chat) => {
    return { ...chat };
  });

  const [chatsList, setChatsList] = useState(chatMessagesInitialCopy);

  const updateLike = (id) => {
    console.log(`updateLike called on chat id: ${id}`);
    const newArr = [];
    for (const chat of chatsList) {
      if (id !== chat.id) {
        newArr.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: !chat.liked,
        };
        newArr.push(newChat);
      }
    }
    setChatsList(newArr);
  };

  const countLikes = () => {
    let count = 0;
    for (const chat of chatsList) {
      if (chat.liked === true) {
        count += 1;
      }
    }
    return count;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <h3>{countLikes()} ❤️s</h3>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
 
        <ChatEntry
          sender="Vladimir"
          body="why are you arguing with me"
          timeStamp="2018-05-29T22:49:06+00:00"
        /> */}

        {/*Wave 02: Render ChatLog component */}
        <ChatLog entries={chatsList} updateLike={updateLike} />
      </main>
    </div>
  );
};

export default App;
