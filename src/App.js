import React from 'react';
import './App.css';
import { useState } from 'react';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';




const App = () => {
  // const [chatData, setChatData] = useState(chatMessages);
  // const chatData = useState(chatMessages)
  const messages = chatMessages.map((message, i) => {
  //   // return <ChatEntry
  //   // key={i}
  //   // sender={message.sender}
  //   // body={message.body}
  //   // timeStamp={message.timeStamp}
  //   // liked={message.liked}
  //   // />
  // })

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          key={i}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
        />
      </main>
    </div>
  );
      }
      )
      return messages[0]
    };

export default App;
