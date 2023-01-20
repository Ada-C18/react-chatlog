import React, { useEffect, useState } from 'react';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import './App.css';

const App = () => {
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    setMessageData(chatMessages);    
  }, []);

  const entries = messageData.slice(0);

  return (
    <div id="App">
      <header>
        <h1>Rockin' React Chat Log!</h1>
      </header>
      <main>
        <div className="messageContainer">
          <div className="fullChatLog">
            <li>
              <ChatLog
                entries={entries}
              ></ChatLog>
            </li>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;