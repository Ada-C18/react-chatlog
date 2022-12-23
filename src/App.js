import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatMessages)

  const updateMessages = (updatedMessage) => {
    const messages = entries.map(message => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      }
      else {
        return message
      }
    });
    setEntries(messages);
  };
  
  const totalLikes = (entries) => {
    let likes = 0
    for (let message of entries){
      if (message.liked === true){
        likes +=1;
      }
    }
    return `${likes} ❤️s`;   
    };
  
  return (
    <div id="App">
      <header>
        <h1>Heard it Through The Ivy Vine</h1>
        <section>
          <div className='widget'>
            <div id='heartWidget'>{totalLikes(entries)}</div>
          </div>
        </section>
      </header>       

      <main>
          <ChatLog 
            entries={entries}
            onToggleLike={updateMessages}
          ></ChatLog>
      </main>
    </div>
  );
};

export default App;
