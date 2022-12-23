import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';



const App = () => {
  const [messageData, setMessageData] = useState(chatMessages);
  let [totalLikes, setTotalHeart] = useState(0);

  const updateText = (updateText) => {
    const messages = messageData.map((message) => {
      if (message.id === updateText.id) {
        return updateText;
      } else {
        return message;
      }
    });
    setMessageData(messages);
  };

  const updateTotalLikes = (bool) => {
    bool ? setTotalHeart((totalLikes += 1)) : setTotalHeart((totalLikes -= 1));
  };
  return (
    <div id='App'>
      <header>
        <h1>Chat with {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
        <h2>{totalLikes > 0 && `${totalLikes} ❤️s`}</h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
          entries={messageData}
          updateText={updateText}
          totalLikes={totalLikes}
          setTotalHeart={setTotalHeart}
          updateTotalLikes={updateTotalLikes}
        />
      </main>
    </div>
  );
};

export default App;
