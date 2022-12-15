import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const copyOfChatMessages = chatMessages.map((chat) => {
    return { ...chat };
  });

  const [chatData, setChatData] = useState(copyOfChatMessages);

  const updateLiked = (updatedChatEntry) => {
    console.log('calling updateLiked in App');
    const updatedChatData = chatData.map((chat) => {
      if (chat.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return chat;
      }
    });
    setChatData(updatedChatData);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatData} updateLiked={updateLiked} />
      </main>
    </div>
  );
};

export default App;
