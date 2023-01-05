import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';



const App = () => {
  const[messages, setMessages ]= useState(chatMessages)
  const [likesCount, setLikesCount] = useState(0);

  const updateHeartLikes = (id, like) =>{

    const newMessages = messages.map((message)=> {
      if (message.id ===id){
        const newMessage={...message}
        newMessage.liked =like;
        return newMessage
      }else{
        return message
      }
    });


    setMessages(newMessages);
    if (like) setLikesCount(likesCount +1);
    if (!like) setLikesCount(likesCount-1);
    return likesCount
  };
 

  return (
    <div id="App">
      <header>
        <h1>ChatEntry</h1>
        <h2 className="like">{`${likesCount} ❤️s`} </h2>
      </header>
     <ChatLog entries={messages} setUpdateHeartLikes={updateHeartLikes}/>
    </div>
  );
};

export default App;
