import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'; 


const App = () => {

  const [chatMessage, setChatMessage] = useState(chatMessages);

  const likedChatMessage = (id) => {
    setChatMessage(chatMessage => chatMessage.map(message => {
      if(message.id === id) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      }
    }));
  };

  // const likedChatMessage = (id, like) => {
  //   setChatMessage(chatMessage => chatMessage.map(message => {
  //     if(message.id === id) {
  //       const newMessage = {...message}
  //       newMessage.liked = like;
  //       return newMessage
  //     } else {
  //       return message;
  //     }
  //   }));
  // };

  const likedCounter = (chatMessage) => {
    return chatMessage.reduce((total, message) => {
      if (message.liked) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
  };

  const totalLiked = likedCounter(chatMessage)

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
          entries = { chatMessage }
          onLikedChatMessage = { likedChatMessage }
        />
      </main>
    </div>
  );
};

export default App;
