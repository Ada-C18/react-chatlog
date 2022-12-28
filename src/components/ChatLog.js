import React from 'react'
import ChatEntry from './ChatEntry'

function ChatLog(props) {
    const data = props.entries;  
    return (
    <body>
    {data.map((entries)=>{

    return (
    
    <ChatEntry
    toggleLike={props.toggleLike}
    key={entries.id}
    id={entries.id}
    sender={entries.sender} 
    body={entries.body} 
    timeStamp={entries.timeStamp}
    isLiked={entries.liked}/>
    )})
};
    </body>
)};

export default ChatLog