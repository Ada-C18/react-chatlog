import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/ChatLog';

const App = () => {
  const firstCopy = chatMessages.map((chat) => {
    return {...chat};
    } );

  const [entries, setEntries] = useState(firstCopy);

  const updateHeartLikes = (chatId) => {
    const newChatList =[];
    for (const chat of entries) {
      if (chat.id !== chatId) {
        newChatList.push(chat);
      } else {
        const newChat ={
          ...chat,
          liked: !chat.liked,
        };
        newChatList.push(newChat);
      }
      setEntries(newChatList)
    }
}; 
    const heartLikes = () =>{
      return entries.reduce((accumulator, count) => {
        return count.liked ? accumulator +1 : accumulator;
    }, 0 );
  };

  return (
    <div id="App">
      <header>
        <h1>Interesting Conversations</h1> <br />
        <h2> {heartLikes()} ❤️s </h2>
      </header>
      <main>
        <ChatLog entries={entries} updateHeartLikes={updateHeartLikes} />
        {/* /* Wave 01: Render one ChatEntry component */}
      </main>
    </div>
  );
};

export default App;
