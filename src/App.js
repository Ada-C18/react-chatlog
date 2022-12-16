import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';



const chatMessagesData = chatMessages.map((message, i) => {

  return ( 
    <ChatEntry
      key={i}
      // id={message.id}
      sender={message.sender}
      body={message.body}
      timeStamp={message.timeStamp}
      liked={message.liked}
    />
  )
});


const App = () => {
  // const chatEntry = <ChatEntry />
  return (
    <div id="App">
      <header>
        <h1>Chat Log Vladmir and Estragon</h1>
      </header>
      <main>
        {chatMessagesData}
      </main>
    </div>
  );
};

export default App;
