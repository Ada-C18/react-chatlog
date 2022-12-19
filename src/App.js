import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    const chatCopy = chatMessages.map((data) => {
      return {
        ...data,
      };
    });
    setChatList(chatCopy);
  }, []);

  const changeLike = (chatId, likedOr) => {
    console.log('changeLike called');
    const newchatlist = [];
    for (const chat of chatList) {
      if (chat.id !== chatId) {
        newchatlist.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: likedOr,
        };
        newchatlist.push(newChat);
      }
    }
    setChatList(newchatlist);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Room</h1>
        <section className="widget" id="heartWidget">
          2 ❤️s
        </section>
      </header>
      <main>
        <ChatLog entries={chatList} changeLike={changeLike} />
      </main>
    </div>
  );
};

export default App;

/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */
