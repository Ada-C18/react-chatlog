// import { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const entries = chatMessages;


const App = () => {
  // const [messages, setMessages] = useState(messagesJson);
  // const [entries, setEntries] = useState(chatMessages);

  //Event handler for liked
  // const updateEntries = ()/*updatedEntry*/ => {
  //   // const entries = chatMessages.map(entry => {
  //   //   entry.liked = entry.liked ? !entry.liked : entry.liked;
  //   //   return entry;
  //   // });
  //   console.log('We got the button to work!')
  //   setEntries(entries);
  // }
  // const likeOrUnlike = (liked) => {
  //   const entries  = chatMessages.map((entry)=> {
  //       entry.liked = entry.liked ? !entry.liked : entry.liked;
  //       return entry;
  //   });
  //   setEntries(entry);
  // };


  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={entries} 
        /*onUpdateLiked = {updateEntries}/>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
