// import { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const entries = chatMessages;

const App = () => {
  // const [messages, setMessages] = useState(messagesJson);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={entries} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
