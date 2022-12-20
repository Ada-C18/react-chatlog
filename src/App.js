import React from 'react';
import './App.css';
import { useState } from 'react';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  const[chatData, setChatData] = useState(chatMessages)


  const addLike = (id) => {
    console.log(`Liking message ${id}`)
    // console.log({likedCount})
    const updatedLikes = chatData.map(message => {
      if (message.id === id){
        return{...message, likedCount: message.likedCount + 1}
      } else {
        return message;
      }
      
    });
    setChatData(updatedLikes);
  }

    
  const calcTotalLikes = (chatData) => {
    return chatData.reduce((total, message) => {
      if (message.liked) {
        total += 1
      }
      return total;
    }, 0)
    // console.log(likeCount);
  };

  const totalLikeTally = calcTotalLikes(chatData);

  // const updateChatData = (updatedChatData) => {
  //   const entries = chatData.map(entry => {
  //     if (entry.id === updatedChatData.id) {
  //       return updatedChatData
  //     } else {
  //       return entry
  //     };
  //   });
  //   setChatData(entries);
  // };
  

  return (
    <div id="App">
      <header>
        <h1>Chat Log Vladmir and Estragon</h1>
        <h2>{totalLikeTally} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatData}
        onAddLike ={addLike}
        // onUpdateChat = {updateChatData}
        />
      </main>
    </div>
  );
};

export default App;

// const App = () => {
//   const [totalLikes, setTotalLikes] = useState(0);

//   const calcTotalLikes = () => {
//     // Calculate the total number of likes by summing up the 'liked' values of all messages
//     const total = chatMessages.reduce((acc, message) => acc + message.liked, 0);
//     setTotalLikes(total);
//   };

//   return (
//     <div id="App">
//       <header>
//         <h1>Chat Log Vladmir and Estragon</h1>
//         <h2>{totalLikes}❤️s</h2>
//       </header>
//       <main>
//         {/* Pass the calcTotalLikes function as a prop to the ChatLog component */}
//         <ChatLog entries={chatMessages}/>
//       </main>
//     </div>
//   );
// };

// export default App;
