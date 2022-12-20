import React, { useState } from 'react';
import './App.css';
import entries from './data/messages.json';
import ChatLog from './components/ChatLog';

// our code from snow leopards
const App = () => {
  const[chatData, setChatData] = useState(0);
  const likeMessage = (id) => {
    setChatData(chatData => chatData.map(chat => {
      if(chat.id === id) {
        return{...chat, likeCount: chat.likeCount + 1};
      } else {
        return chat;
      }
    }));
  }


// copied code from snow leopards


// const CatApp = () => {
//   const [catData, setCatData] = useState([]);
 
//   const petCat = (id) => {
//     return petCatApi(id)
//     .then(catResult => {
//       setCatData(catData => catData.map(cat => {
//         if(cat.id === catResult.id) {
//           return catResult;
//         } else {
//           return cat;
//         }
//       }));
//     })
//   }

//   const calcTotalPets = (catData) => {
//     return catData.reduce((total, cat) => {
//       return total + cat.petCount;
//     }, 0)
//   };

//   const totalPetTally = calcTotalPets(catData);
// // end of copied code




  return(
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
       
        <ChatLog entries={entries}
        onLikeMessage={likeMessage}

        />
      </main>
    </div>
  );
};


export default App;
