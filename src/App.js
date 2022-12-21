import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);

  const changeLikes = (id) => {
    const newMessageLikes = messageData.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          liked: !message.liked,
        };
      } else {
        return message;
      }
    });
    setMessageData(newMessageLikes);
  };

  const countLikes = () => {
    return messageData.reduce((counts, entry) => {
      return entry.liked ? counts + 1 : counts;
    }, 0);
  };

  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
        <h2>{countLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messageData} changeLikes={changeLikes}></ChatLog>
      </main>
    </div>
  );
};

export default App;
