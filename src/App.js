import React, { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // brain
  const [ChatData, setChatData] = useState(chatMessages);
  const [likeCount, setLikeCount] = useState(0);
  const updateLike = (id, like) => {
    // console.log(id, ChatData);
    // console.log(like);
    // console.log(id.liked);

    const newMessage = ChatData.find((entry) => entry.id === id);
    // console.log('newMessage');
    // console.log(newMessage);
    // console.log(like);
    newMessage.liked = like;
    setChatData([...ChatData]);
    if (like) {
      setLikeCount(likeCount + 1);
      console.log('setLikeCount');
    }
    if (!like) {
      setLikeCount(likeCount - 1);
      console.log('setLikeCount2');
    }
  };
  // beauty
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladmir and Estrogen</h1>
        <section>
          <h2>{likeCount} ❤️s</h2>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        // Wave 02: Render ChatLog component */}
        <ChatLog entries={ChatData} updateMessage={updateLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
