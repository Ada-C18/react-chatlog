import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between _ and _</h1>
        <section>_❤s</section>
      </header>
      <main>
        {
          <ChatEntry
            chatEntryData={ChatEntry}
          /> /* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */
        }
      </main>
    </div>
  );
};

export default App;
