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

  const [chatLog, setChatLog] = useState(initialCopy);


  // //write callback function
  // //create new array or object to re-render
  // const updateLikeCount = () => {
  //   // const newChatLog = chatLog.map((chatEntry)) if not id return og, else return newchat with likes
  //   const newChatLog = []
  //   for(const log of chatLog) {
  //     if(log.id !== entryId) {
  //       newChatLog.push(log)
  //     }else {
  //       const newChat = {
  //       ...log,
  //       likes: updatedLikeCount 
  //       }; 
  //       newChatLog.push(newChat)
  //     }
  //   }
  const updateLikeCount = (hearts)=> {
    console.log(hearts)
    if(hearts) {
    setLikesCount(likesCount +1)}
    else {
    setLikesCount(likesCount -1)
    }



  }
    
    // setChatLog(newChatLog);//this will update state mutating the new array
    
  
  const [likesCount, setLikesCount] = useState(0)
  
  // const likeCount = () => {
  //   // const [likesCount, setLikeCount] = useState(0)
  //   // const increaseLikes = () => {
  //     if(liked) {
  //     setLikesCount(likesCount + 1);
  //     }else {

    // };
  // }



  render() ;
  return (
    <div id="App">
      <header>
        <h1>{likesCount} ❤️ </h1>
      </header>
      <main>
{/* 
        <button className="like" ></button> */}
        {/* <ChatLog entries = {chatMessages} updateLikeCount = {update
        <ChatLog entries = {chatLog}
         updateLikeCount = {updateLikeCount}/>
        
      </main>
    </div>
  );
  }
   


export default App;

