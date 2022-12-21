import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const entries = chatMessages;
  const localSender = entries[0].sender
  let remoteSender = ''
   
  for (const message of entries){
    if( message.sender !== localSender){
      remoteSender = message.sender;
      break;
    }}
  
  const initialCopy = entries.map((chat) => {
    return { ...chat };
  });

  const [chatList, setChatList] = useState(initialCopy);
  const [countLikes, setCountLikes] = useState(0);

  const updateLikes = (chatId, likeStatus) => {
    console.log('updateLike called');
    const newChatList = [];
    for (const chat of chatList) {
      if (chat.id !== chatId) {
        newChatList.push(chat);
      } else {
        const newChat = {
          ...chat,
          liked: likeStatus,
        };
        newChatList.push(newChat);
      }
    }
    setChatList(newChatList);
    if (likeStatus) {
      setCountLikes(countLikes - 1);
    } else {
      setCountLikes(countLikes + 1);
    }
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between {localSender} and {remoteSender}</h1>
        <section >{countLikes} ❤️s</section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages} updateLikes={updateLikes} />
      </main>
    </div>
  );
};

export default App;
