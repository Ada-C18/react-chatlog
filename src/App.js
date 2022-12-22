import React, { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // brain
  const [ChatData, setChatData] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);
  const updateLike = (id, like) => {
    const newMessage = ChatData.find((entry) => entry.id === id);
    newMessage.liked = like;
    setChatData([...ChatData]);
    if (like) {
      setLikeCount(likeCount + 1);
    }
    if (!like) {
      setLikeCount(likeCount - 1);
    }
  };
  // beauty
  return (
    <div id="App">
      <header>
        <h1>{likeCount} ❤️s</h1>
      </header>
      <main>
        {/* <ChatEntry
          sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timestamp={chatMessages[0].timeStamp}
        /> */}
        {/* Wave 01: Render one ChatEntry component
        // Wave 02: Render ChatLog component */}
        <ChatLog messages={ChatData} updateMessage={updateLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
