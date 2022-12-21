import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';



const App = () => {
  const entries = chatMessages;

  const initialCopy = entries.map((chat) => {
    return { ...chat };
  });

  const [chatList, setChatList] = useState(initialCopy);
  const [countLikes, setCountLikes] = useState(0);
  const [likeStatus, setlikeStatus] = useState(false);

  const updateLikes = (chatId, likeStatus) => {
    console.log('updateLike called');
    const newChatList = [];
    for (const chat of chatList) {
      if (chat.id !== chatId) {
        newChatList.push(chat);
      } else {
        const newChat = {
          ...chat,
          like: !likeStatus,
        };
        newChatList.push(newChat);
       
      }
    }
    setChatList(newChatList);
    if (likeStatus){
      setCountLikes(countLikes +1)
      setlikeStatus(!likeStatus)
    }else{
      setCountLikes(countLikes -1)
      setlikeStatus(!likeStatus)
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{countLikes} ❤️s</section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} updateLikes={updateLikes}
        countLikes={countLikes} />
      </main>
    </div>
  );
};

export default App;
