import React from 'react'
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
    if (!entries) {
        return <div>Nothing here</div>
    }
    const Logs = entries.map(entry => {
        return (<ChatEntry id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} />)
    })
    return (<div>{Logs}</div>)
}

export default ChatLog;