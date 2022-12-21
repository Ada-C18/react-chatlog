import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';




const ChatLog = (props) => {

    const chats = props.entries.map((message) => {
        return (
            < ChatEntry
                id={message.id}
                sender={message.sender}
                body={message.body}
                timeStamp={message.timeStamp}
                liked={message.liked}
            />
        )
    })
    return <div>{chats}</div>;
}


export default ChatLog;
