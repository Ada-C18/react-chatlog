import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';


function App () 
{
  const [entries, setEntries] = useState(chatMessages);

  const updateHeartStatus = (entryId, updatedHeartStatus) =>
  {
    console.log('updateHeartStatus called');
    const newEntriesList = [];
    for (const entry of entries)
    {
      if (entry.id !== entryId)
      {
        newEntriesList.push(entry);
      } else
      {
        const newEntry = {
          ...entry,
          liked: updatedHeartStatus,
        };
        newEntriesList.push(newEntry);
      }
    }
    setEntries(newEntriesList);
  };

  const countLikes = () =>
  {
    console.log('countLikes called');
    let like = 0;
    for (const entry of entries)
    {
      if (entry.liked === true)
      {
        like += 1;
      }
    }
    return like;
  };

  return (
    <div id="App">
      <header>
        <h1>Vladimir & Estragon</h1>
        <center>{countLikes()} ❤️s</center>
      </header>
      <main>
        <ChatLog
          entries={entries}
          updateHeartStatus={updateHeartStatus}
        />
       
      </main>
    </div>
  );
};

export default App;
