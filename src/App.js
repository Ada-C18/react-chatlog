// import { useStates} from 'react';
import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';





const App = () => {

  const entries = { chatMessages };
  
 

  // const initialCopy =  chatMessages.map((chat)=>{
  //   return {...chat};
  // });

  // const [chatMessages, setChatMessage] = useState(initialCopy);
  // const [countLikes, setCountLikes] = useState(0);

  // const updateLikes = (message) => {

  // }

  // console.log('initialCopy',initialCopy)
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={chatMessages}  />
       
      </main>
    </div>
  );
};

export default App;
