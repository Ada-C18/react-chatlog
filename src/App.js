import React from 'react';
import './App.css';
import {useState} from 'react';
import ChatLog from './components/ChatLog.js';
import ColorChoice from './components/ColorChoice.js';
import chatMessages from './data/messages.json';

const App = () => {
  const[chatData, setChatData] = useState(chatMessages);

  const calcTotalLikes = (chatData) => {
    return chatData.reduce((total, entry) => {
      let likeCount = entry.liked ? 1: 0;
      return total + likeCount;
  }, 0)

  

};
const totalLikesTally =  `${calcTotalLikes(chatData)} ❤️s`

const setColorCallback = (color) => {
  
  return color;

}

  const updateLikes = (id) => {
    setChatData(chatData.map(entry=>{
      if(entry.id === id){
        const button = document.querySelectorAll('button.like')[id - 1]
        button.innerHTML = entry.liked ? '🤍' :'❤️'

        return {...entry, liked: !(entry.liked)};
      }
      else{
        return entry;
      }
    }))
    
    
  };
  
  
  
  

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <ColorChoice onSetColorCallback={setColorCallback}/>
      </header>
      <main>
        <p> {totalLikesTally}</p>
        <ChatLog
          entries={chatData}
          onUpdateLikes ={updateLikes}
          onSetColorCallback={setColorCallback}
        />
        
      </main>
    </div>
  );
};

export default App;
