import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [userColors, setUserColors] = useState({
    local: 'black',
    remote: 'black',
  });

  const toggleLiked = (id) => {
    setChatData((chatData) =>
      chatData.map((chat) => {
        if (id === chat.id) {
          return { ...chat, liked: !chat.liked };
        } else {
          return chat;
        }
      })
    );
  };

  const calTotalLikes = (chatData) => {
    return chatData.reduce((total, chat) => {
      return chat.liked ? total + 1 : total;
    }, 0);
  };

  const totalLikes = calTotalLikes(chatData);

  const selectLocalColor = (color) => {
    setUserColors((userColors) => {
      return { ...userColors, local: color };
    });
  };

  const selectRemoteColor = (color) => {
    setUserColors((userColors) => {
      return { ...userColors, remote: color };
    });
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span className={userColors.local}>Vladimir</span> and{' '}
          <span className={userColors.remote}>Estragon</span>
        </h1>
        <section>
          <ColorChoice
            setColorCallback={selectLocalColor}
          />
          <h2 id="heartWidget" className="widget">
            {totalLikes} ❤️s
          </h2>
          <ColorChoice
            setColorCallback={selectRemoteColor}
          />
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onToggleLiked={toggleLiked}
          localColor={userColors.local}
          remoteColor={userColors.remote}
        />
      </main>
    </div>
  );
};

export default App;
