import React, { useEffect, useState } from 'react';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import './App.css';

const App = () => {

  const [chatEntryData, setChatEntryData] = useState([
    {
    id: 0,
    sender: '',
    body: '',
    timeStamp: '',
    liked: false
    }
  ]);

  useEffect(() => {
    setChatEntryData(chatMessages);
  }, []);
  
  const [likesCount, setLikesCount] = useState(0);

  const updateChatEntryData = updatedEntry => {
    const updatedEntries = chatEntryData.map(entry => {
      if (entry.id === updatedEntry.id) {
        if (updatedEntry.liked === true) {
          setLikesCount((likesCount) => likesCount + 1);
          return updatedEntry;
        } else {
          setLikesCount((likesCount) => likesCount - 1);
          return updatedEntry;
        }
      } else {
        return entry;
      }});
      setChatEntryData(updatedEntries);
    };

  return (
    <div id="App">
      <header>
        <h1>Rockin' React Chat Log!</h1>
        <h2>{likesCount} ❤️</h2>
      </header>
      <main>
        <div className="messageContainer">
          <div>
            <ul>
              <ChatLog
                entries={chatEntryData}
                onUpdateLikes={updateChatEntryData}
              ></ChatLog>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;