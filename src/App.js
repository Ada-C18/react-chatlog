import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [totalHeartCount, setHeartCount] = useState(0);
  const toggleLike = (messageID) => {
    messages[messageID].liked = !messages[messageID].liked;
    setMessages(messages);
    setHeartCount(() =>
      messages[messageID].liked ? totalHeartCount + 1 : totalHeartCount - 1
    );
    return messages[messageID].liked ? '❤️' : '🤍';
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <p>{totalHeartCount} ❤️s</p>
      </header>
      <main>
        <div>
          <ChatLog entries={messages} onUpdateLikeStatus={toggleLike} />
        </div>
        {/* Wave 01: Render one ChatEntry component
      Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
