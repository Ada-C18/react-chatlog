import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'; 


const App = () => {

  const [chatMessageList, setChatMessageList] = useState(chatMessages);

  const likedChatMessage = (id) => {
    setChatMessageList(chatMessageList => chatMessageList.map(message => {
      if(message.id === id) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    }));
  };


  const likedCounter = (chatMessageList) => {
    return chatMessageList.reduce((total, message) => {
      if (message.liked) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
  };

  const totalLiked = likedCounter(chatMessageList)

  return (
    <div id='App'>
      <header>
        <h1>Chatter box</h1>
      </header>

      <main>
        <h2> 
        { totalLiked } ❤️s
        </h2>
    
        <ChatLog
          entries = { chatMessageList }
          onLikedChatMessage = { likedChatMessage }
        />
      </main>
    </div>
  );
};

export default App;
