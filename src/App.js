import React from 'react';
import { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ColorButtons from './components/ColorButtons.js';
import ChatLog from './components/Chatlog.js';

const colors = [
  {
    color: 'red',
    icon: '🔴',
  },
  { color: 'orange', icon: '🟠' },
  {
    color: 'yellow',
    icon: '🟡',
  },
  {
    color: 'green',
    icon: '🟢',
  },
  {
    color: 'blue',
    icon: '🔵',
  },
  {
    color: 'purple',
    icon: '🟣',
  },
];

const App = () => {
  console.log('App component is rendering');

  const [messageData, setLiked] = useState(chatMessages);
  // const [ChatLog, setLike] = useState(chatMessages); - cannot use ChatLog as a variable c because it is a component

  const updateLiked = (id) => {
    const newChatEntry = messageData.map((chatEntry) => {
      if (chatEntry.id === id) {
        return {
          ...chatEntry,
          liked: !chatEntry.liked,
        };
      } else {
        return chatEntry;
      }
    });
    setLiked(newChatEntry);
  };

  const totalLikes = messageData.filter((chatEntry) => {
    return chatEntry.liked === true;
  }).length;

  const sender1 = messageData[0].sender;
  const sender2 = messageData[1].sender;

  const [color, setColor] = useState('');
  const updateColor = () => {
    console.log('updateColor called');
    setColor(color);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {sender1} and {sender2}
        </h1>
        <div>
          <section className="widget">
            <div>
              <h2 className={color}>{sender1}'s Color</h2>
              <ColorButtons colorsData={colors} onClick={updateColor} />
            </div>
            <h1 id="#heartWidget">{totalLikes} ❤️s</h1>
            <div>
              <h2 className={color}>{sender2}'s Color</h2>
              <ColorButtons colorsData={colors} onClick={updateColor} />
            </div>
          </section>
        </div>
      </header>
      <main>
        <ChatLog entries={messageData} updateLiked={updateLiked} />
      </main>
    </div>
  );
};

export default App;
