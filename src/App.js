import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntry] = useState(chatMessages);

  const likeEntry = (id) => {
    setEntry((entries) => {
      return entries.map((entry) => {
        if (entry.id === id) {
          console.log('id:', id, entry.liked);
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }
      });
    });
  };

  // count number of red hearts
  const calcTotalLikes = (entries) => {
    return entries.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const totalHeartsTally = calcTotalLikes(entries);
  // color choice  state for vlad
  const [colors, setColor] = useState(ColorChoice);
  // color choice state for estragon

  // passed to respetive senders, both into chatlog


  return (
    <div id="App">
      <header>
        <h1>Top Secret Sesh: {entries[0].sender} and {entries[1].sender}</h1>
        <section>
          <span>
            <div className="header-text" id="vlad-div">Vladimir's color:</div>
            <div id="vlad-colors"><ColorChoice/></div>
          </span>
          <h1 className='header-text'>{totalHeartsTally} ❤️s</h1>
          <span>
              <div className='header-text' id="e-div">Estragon's color:</div>
              <div id='e-colors'><ColorChoice/></div>
          </span>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        <ChatEntry 
          sender="Joe Biden"
          body="Get out by 8am.  I'll count the silverware"
          timeStamp="2018-05-18T22:12:03Z"
          /> */}
        {/*Wave 02: Render ChatLog component */}
        <ChatLog entries={entries} onLikeEntry={likeEntry} 
        // e color state
        // vlad color state
        />
      </main>
    </div>
  );
};

export default App;
