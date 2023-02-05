import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

let countLikes =0;

const App = () => {
  const [chatEntry, setChatEntry ] = useState(chatMessages);
  const updateChatEntry = (toUpdate) => {
    const chats = chatEntry.map((chat) => {
      if (chat.id === toUpdate.id){
        countLikes = toUpdate.liked ? countLikes +1 : countLikes -1
        return toUpdate;
      }
      return chat;
    });
    setChatEntry(chats);
  };



  return (
    <div id="App">
      <header>
        <h1>Chat between Vladmir and Estragon</h1>
        <div className='numberOfLikes'>
          <h1 className='numberLikes'>{countLikes} ❤️s</h1>
        </div>
      </header>
      <main>
        <ChatLog entries = {chatEntry}
          onUpdateChat = {updateChatEntry}
        />
      </main>
    </div>
  );
};

export default App;
