import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog'; 


const App = () => {

  // const [chatMessage, setChatMessage] = useState({chatMessages})

  return (
    <div id="App">
      <header>
        <h1>Chatter box</h1>
      </header>
      <main>
        <ChatLog
          entries = {chatMessages}
        />
      </main>
    </div>
  );
};

export default App;
