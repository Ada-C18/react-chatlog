import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatLog = (props) => {
    const entries = props.entries;
    // console.log(props)
    return (
        <div>{props.entries.map((chat,i) => (
        <ChatEntry
        key={i}
        id = {chat.id}
        sender = {chat.sender}
        body = {chat.body}
        timeStamp = {chat.timeStamp}
        liked = {chat.liked}
        />
        ))};
        </div>
    )
    
}


export default ChatLog;