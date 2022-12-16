import React from 'react'
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, toggleLike}) => {
    if (!entries) {
        return <div>Nothing here</div>
    }
    // let count
    const Logs = entries.map(entry => {
        
        return (<ChatEntry id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked} toggleLike = {toggleLike}/>)
    })
    return (<div>{Logs}</div>)
}

export default ChatLog;