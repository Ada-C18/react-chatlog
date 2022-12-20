import React from 'react'
import ChatEntry from './ChatEntry'

function ChatLog(props) {
  const data = props.entries;  
  return (
    <>
    {data.map((entries)=>{
    return  (
    <ChatEntry
    key={entries.id}
    sender={entries.sender} 
    body={entries.body} 
    timeStamp={entries.timeStamp}/>
   )
  }
 )
}

    </>
    
    

  )
}

export default ChatLog