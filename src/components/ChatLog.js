import React from 'react'
import ChatEntry from './ChatEntry'

function ChatLog(props) {
    const data = props.entries;  
    return (
    <>
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
    </>
)};

export default ChatLog