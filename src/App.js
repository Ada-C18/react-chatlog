import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const copyOfChatMessages = chatMessages.map((chat) => {
    return { ...chat };
  });

  const [chatData, setChatData] = useState(copyOfChatMessages);
  const [numOfLiked, setNumOfLiked] = useState(0);

  const updateLiked = (updatedChatEntry) => {
    const updatedChatData = chatData.map((chat) => {
      if (chat.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return chat;
      }
    });
    setChatData(updatedChatData);
    setNumOfLiked(countLiked(updatedChatData));
  };

  const countLiked = (chatDataArray) => {
    let count = 0;
    for (const chat of chatDataArray) {
      if (chat.liked) {
        count += 1;
      }
    }

    return count;
  };

  return (
    <div id="App">
      <header>
        <h1>{numOfLiked} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={chatData} updateLiked={updateLiked} />
      </main>
    </div>
  );
};

export default App;
