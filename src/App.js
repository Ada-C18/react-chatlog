import React from 'react';
import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import chatMessages from './data/messages.json';

const local = chatMessages[0].sender;
const remote = chatMessages[1].sender;
// check getting names of each sender in list of messages
// console.log(local, remote);

// sender needs a position attached to is to assign a color later
const chatMessagesLocalRemote = chatMessages.map((entry) => {
  if (entry.sender === local) {
    return { ...entry, position: 'local' };
  } else {
    return { ...entry, position: 'remote' };
  }
});

// check position in list of entries
// console.log(chatMessagesLocalRemote);

const App = () => {
  const [entries, setEntries] = useState(chatMessagesLocalRemote);

  const likeEntry = (id) => {
    setEntries((entries) => {
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

  // console.log(entries);

  // count number of red hearts
  const calcTotalLikes = (entries) => {
    return entries.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const totalHeartsTally = calcTotalLikes(entries);

  // color choice
  // pass to respective senders, both into chatlog and to ChatEntry
  // pass callBack function prop to color choice, chatlog and to ChatEntry  "onColorPick={}"

  const pickColor = (sender, color) => {
    console.log('color picked', sender, color);

  };


  return (
    <div id="App">
      <header>
        <h1>
          Top Secret Chat Sesh: {entries[0].sender} and {entries[1].sender}
        </h1>
        <section>
          <span>
            <div className="header-text" id="vlad-div">
              Vladimir's color:
            </div>
            {/* use template string to use color className */}
            <div id="vlad-colors">
              
              <ColorChoice sender={local} onColorPick={pickColor}/> {/* onColorPick={pickColor}*/}
            </div>
          </span>
          <h1 className="header-text">{totalHeartsTally} ❤️s</h1>
          <span>
            <div className="header-text" id="e-div">
              Estragon's color:
            </div>
            <div id="e-colors">
              <ColorChoice sender={remote} onColorPick={pickColor}/> {/* onColorPick={pickColor}*/}
            </div>
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
        <ChatLog
          entries={entries}
          onLikeEntry={likeEntry}
          // onColorPick={pickColor}
        />
      </main>
    </div>
  );
};

export default App;
