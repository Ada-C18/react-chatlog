import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [userColors, setUserColors] = useState({
    local: '',
    remote: '',
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

  // create object with local or remote keys and names as values - sender names
  // const userNames = () => {
  //   chatData.reduce((messages, user) => {
  //     return {...messages, [user.sender]: }
  //   })
  // }

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
            color={userColors.local}
          />
          <h2 id="heartWidget" className="widget">
            {totalLikes} ❤️s
          </h2>
          <ColorChoice
            setColorCallback={selectRemoteColor}
            color={userColors.remote}
          />
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onToggleLiked={toggleLiked} colors={userColors} />
      </main>
    </div>
  );
};

export default App;
