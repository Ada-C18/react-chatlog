import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';




const ChatLog = (props) => {
    const chats = props.entries.map((message, i) => {
        //console.log(elem.sender);
        return (
            < ChatEntry
                key={i}
                sender={message.sender}
                body={message.body}
                timeStamp={message.timeStamp}
            />
        )
    })
    return <div>{chats}</div>;

}


export default ChatLog;
