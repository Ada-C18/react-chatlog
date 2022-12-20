import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';




const App = () => {

  const messages = chatMessages.map((message, i) => {
    return (
      <div id="App">
        <header>
          <h1>Application title</h1>
        </header>
        <main>
          <ChatEntry
            key={i}
            id={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
          />
        </main>
      </div>
    )});
  return messages
};

export default App;
