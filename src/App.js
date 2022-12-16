import React from 'react';
import {useState} from 'react'
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const copy = chatMessages.map((chat) => {
    return {...chat};
  });
  const [chatList, setChatList] = useState(copy);
  const [likesCount, setLikesCount] = useState(0)
  const userOne = chatList[0].sender;
  const userTwo = chatList[1].sender;
  const updateLiked = (chatId, updatedLike) => {
    const newChatList = [];
    if (updatedLike === true){
      setLikesCount(likesCount+1)
    } else{
      setLikesCount(likesCount-1)
    }
    for (const chat of chatList) {
      if (chat.id !== chatId) {
        newChatList.push(chat)
      } else {
        const newChat = {
          ...chat,
          liked: updatedLike
        };
        newChatList.push(newChat)
      }
    }
    setChatList(newChatList)
  };

  return (
    <div id="App">
      <header>
        <h1>Conversation Between {userOne} and {userTwo}</h1>
        <span>{likesCount} ❤️s</span>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */
        <ChatLog entries={chatList} updateLiked={updateLiked}/>}
      </main>
    </div>
  );
};

export default App;
