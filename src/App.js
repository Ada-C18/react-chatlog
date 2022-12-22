import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import {useState} from 'react'; 



const INITIAL_ENTRIES = chatMessages

const App = () => {
  const initialCopy = INITIAL_ENTRIES.map(chatEntry => {
    return {...chatEntry};
  })

  

  const [chatLog] = useState(initialCopy);

  const updateLikeCount = (hearts)=> {
    console.log(hearts)
    if(hearts) {
    setLikesCount(likesCount +1)}
    else {
    setLikesCount(likesCount -1)
    }



  }
  
  
  const [likesCount, setLikesCount] = useState(0)
  

  render() ;
  return (
    <div id="App">
      <header>
        <h1>{likesCount} ❤️s </h1>
      </header>
      <main>
        <ChatLog entries = {chatLog}
         updateLikeCount = {updateLikeCount}/>
      </main>
    </div>
  );
  }
   

export default App;

