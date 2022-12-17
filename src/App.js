import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const messageList = chatMessages[0];

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender={messageList.sender}
          body={messageList.body}
          timeStamp={messageList.timeStamp}
        ></ChatEntry>
      </main>
    </div>
  );
};

export default App;

// const Book = (props) => {
//   return (
//     <section>
//       <h2>{props.title}</h2>
//       <ul>
//         <li>by {props.author}</li>
//         <li>ISBN: {props.isbn}</li>
//       </ul>
//     </section>
//   );
// };

// <h2>{props.sender}</h2>
// <p>{props.body}</p>
// <h4>{props.timeStampe</h4>
