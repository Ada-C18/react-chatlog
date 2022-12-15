import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import chatMessages from './data/messages.json';
// import ChatLog from './components/ChatEntry';

const App = () => {
//
//       // 'id': 1,
//       'sender':'Vladimir',
//       'body':'why are you arguing with me',
//       'timeStamp':'2018-05-29T22:49:06+00:00',
//       // 'liked': false
//       
  const chatEntry = chatMessages[0]
  

  
  
  render() ;
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry sender= {chatEntry.sender} //passing data from ChatEntry
                   body= {chatEntry.body}
                   timeStamp = {chatEntry.timeStamp}>

        </ChatEntry>
{/* 
        {/* <ChatLog> 
          
        </ChatLog>  */}
        
        
        {/* /* Wave 01: Render one ChatEntry component
        
      

        Wave 02: Render ChatLog component */ }
        
      </main>
    </div>
  );
      }
 


export default App;
