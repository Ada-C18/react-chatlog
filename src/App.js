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
    let count = 0;
    const updatedChatData = chatData.map((chat) => {
      if (chat.id === updatedChatEntry.id) {
        if (updatedChatEntry.liked) {
          count += 1;
        }
        return updatedChatEntry;
      } else {
        if (chat.liked) {
          count += 1;
        }
        return chat;
      }
    });
    setChatData(updatedChatData);
    setNumOfLiked(count);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatData[0].sender} and {chatData[1].sender}
        </h1>
        <br></br>
        <h1>{numOfLiked} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={chatData} updateLiked={updateLiked} />
      </main>
    </div>
  );
};

export default App;
