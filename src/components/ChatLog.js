import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';




const ChatLog = (props) => {

    const chats = props.entries.map((entries) => {
        return (
            < ChatEntry
                toggleLike={props.toggleLike}
                key={entries.id}
                id={entries.id}
                sender={entries.sender}
                body={entries.body}
                timeStamp={entries.timeStamp}
                liked={entries.liked}
            />
        )
    })
    return <div>{chats}</div>;
}


export default ChatLog;
