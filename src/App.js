import React, {useState} from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {

  const [entries, setEntries] = useState(chatMessages)

  const calcTotalLikes = () => {
    return entries.reduce((total, entry) => {
      return entry.liked ? total + 1 : total;
    }, 0)
    };

    const updateLike = (id) =>{
    const newEntries = entries.map(entry => {
      if (entry.id === id){
        return { ...entry, liked: !entry.liked };
      } else {
        return entry
      }
    })
    setEntries(newEntries)
  }

  // This line of code is defining a function called updateLike. 
  // When this function is called with an id argument, it will update the 
  // liked status of the item with the matching id in the entries array. 
  // It does this by creating a new array called newEntries, which is a modified 
  // version of the entries array. It does this by using the map method, which takes a 
  // callback function as an argument. The callback function receives the current item 
  // being processed in the entries array as an argument. If the current item has an id 
  // that matches the id passed to the updateLike function, then the item is returned 
  // with its liked property flipped using the not operator (!). If the current item does 
  // not have a matching id, then it is returned as is. After the newEntries array has been created, 
  // the setEntries function is called to update the entries state variable with the new array.


  
    return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <h2> {calcTotalLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} updateLike = {updateLike} />
        {/* The "entries" here should match the entries in line 6 in ChatLog.
        <if we don't have props, it will only pass ChatMessages and won't pass the data from test/>
         */}

      </main>
    </div>
  );
};

export default App;
