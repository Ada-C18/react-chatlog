import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatLog = (props) => {
    const entries = props.entries;
    console.log(props)
    return (
        <div>{props.entries.map((i) => (
        <ChatEntry
        id = {i.id}
        sender = {i.sender}
        body = {i.body}
        timeStamp = {i.timeStamp}
        liked = {i.liked}
        />
        ))};
        </div>
    )
    
}


export default ChatLog;