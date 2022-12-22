import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const startLikeCount = entries.filter((entry) => entry.liked).length;

  const [likeCount, setLikeCount] = useState(startLikeCount);

  const updateMessageData = (updatedMessage) => {
    const messages = entries.map((message) => {
      if (message.id === updatedMessage.id) {
        if (updatedMessage.liked === true && message.liked === false) {
          setLikeCount(likeCount + 1);
        } else if (updatedMessage.liked === false && message.liked === true) {
          setLikeCount(likeCount - 1);
        }
        return updatedMessage;
      } else {
        return message;
      }
    });

    setEntries(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {entries[0].sender} and {entries[1].sender}
        </h1>
        <section>
          <h2 id="heartWidget" className="widget">
            Likes count: {likeCount} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <div className="all_messages_bubble">
          <ChatLog entries={entries} onUpdateMessage={updateMessageData} />

          {/* Wave 01: Render one ChatEntry component
          Wave 02: Render ChatLog component */}
        </div>
      </main>
    </div>
  );
};

export default App;
