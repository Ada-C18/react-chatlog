import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [data, setData] = useState(chatMessages);

  const updateEntries = (updatedEntry) => {
    const entries = data.map((entry) => {
      const returnEntry = entry.id === updatedEntry.id ? updatedEntry: entry;
      return returnEntry;
    });
    setData(entries);
  };

  const calcTotalLikes = (data) => {
    return data.reduce((total, entry) => {
      if (entry.liked) {
        total += 1;
      }
      return total;
    }, 0);
  };

  const totalLikes = calcTotalLikes(data);

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{totalLikes} ❤️s</section>
      </header>
      <main>
        <ChatLog entries={data} onUpdateLiked={updateEntries} />
      </main>
    </div>
  );
};

export default App;
