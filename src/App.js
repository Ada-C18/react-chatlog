import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState} from 'react';

const App = () => {
  // I need an array that has all of my state
  // const initialCopy = chatMessages.map(chat=> {
  //   return {...chat,
  const [initialCopy, setChatEntries] = useState(chatMessages);
  const updateIsLiked = (id) => {
    const newChatEntries = [];
    for (const chat of initialCopy) {
      if (chat.id !== id) {
        newChatEntries.push(chat);
      } else {
        const newChatMessage = {
        ...chat,
        liked: !chat.liked,
      };
      newChatEntries.push(newChatMessage);
    }
    setChatEntries(newChatEntries);
  }
};

  const likesCounter = () => {
    return initialCopy.reduce((accumulator, count) => {
      return count.liked ? accumulator + 1: accumulator;
    }, 0);
  };

  return (
    <div id="App">
      <header>
        <h1>Welcome to the Chat!</h1>
        <p>There are {likesCounter()} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={initialCopy}
        updateIsLiked={updateIsLiked}> </ChatLog>
      </main>
    </div>
  );
};

export default App;
