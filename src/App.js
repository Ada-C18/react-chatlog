import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const initialCopy = chatMessages.map((likes) => {
    return { ...likes };
  });

  const [chatMessagesData, setChatMessagesData] = useState(initialCopy);
  const [countLikes, setCountLikes] = useState(0);
  const updateLikes = (messageUpdate) => {
    const messages = chatMessagesData.map((message) => {
      if (message.id === messageUpdate.id) {
        return messageUpdate;
      }
      return message;
    });
    setChatMessagesData(messages);
    if (messageUpdate.liked) {
      setCountLikes(countLikes + 1);
    } else {
      setCountLikes(countLikes - 1);
    }
  };
  return (
    <div id="App">
      <header>
        <h1>Vladimir & Estragon</h1>
          <p>{countLikes} ❤️s</p>
      </header>
      <main>
      <ChatLog entries={chatMessagesData} updateLikes={updateLikes} /> 
      </main>
    </div>
  );
};

export default App;
