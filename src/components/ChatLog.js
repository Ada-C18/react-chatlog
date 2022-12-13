import React from 'react'
import ChatEntry from './ChatEntry';

const ChatLog = ({log}) => {
    const Logs = log.map(entry => {
        return (<ChatEntry id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} />)
    })
    return (<div>{Logs}</div>)
}

export default ChatLog;