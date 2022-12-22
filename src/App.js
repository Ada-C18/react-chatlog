import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

// {
//   id: 1,
//   sender: 'Vladimir',
//   body: 'why are you arguing with me',
//   timeStamp: '2018-05-29T22:49:06+00:00',
//   liked: false,
// }

const kMessage1 = chatMessages[0];

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          id={kMessage1.id}
          sender={kMessage1.sender}
          body={kMessage1.body}
          timeStamp={kMessage1.timeStamp}
          liked={kMessage1.liked}
        />
      </main>
    </div>
  );
};

export default App;
