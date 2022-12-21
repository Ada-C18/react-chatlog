import React from 'react';
import { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  // const [messages, setMessages] = useState(messagesJson);
  const [data, setData] = useState(chatMessages);

  //Event handler for liked
  const updateEntries = (updatedEntry) => {
    const entries = data.map((entry) => {
      // entry = entry.id === updatedEntry.id ? updatedEntry: entry;
      if (entry.id === updatedEntry.id) {
        // console.log('What is updated here?');
        return updatedEntry;
      } else {
        return entry;
      }
    });
    // console.log('We got the button to work!')
    setData(entries);
  };
  // const likeOrUnlike = (liked) => {
  //   const entries  = chatMessages.map((entry)=> {
  //       entry.liked = entry.liked ? !entry.liked : entry.liked;
  //       return entry;
  //   });
  //   setEntries(entry);
  // };

  const calcTotalLikes = (data) => {
    return data.reduce((total, entry) => {
      if (entry.liked) {
        total += 1;
      }
      return total;
    }, 0);
  };

  const totalLikes = calcTotalLikes(data);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{totalLikes} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={data} onUpdateLiked={updateEntries} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
