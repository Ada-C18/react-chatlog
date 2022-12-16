import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
const App = () => {

  const [entries, setEntries] = useState(chatMessages)
  
  const calcTotalLikes = () => {
    return entries.reduce((total, entry) => {
      return entry.liked ? total + 1 : total;
    }, 0)
  };

  const updateLike = (id) =>{
    const newEntries = entries.map(entry => {
      if (entry.id === id){
        return { ...entry, liked: !entry.liked };
      } else {
        return entry
      }
    })
    setEntries(newEntries)
  }
  return (

    <div id="App">
      <header>
        <h1>Chatty Vamp</h1>
        <h2> {calcTotalLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} updateLike = {updateLike} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;


