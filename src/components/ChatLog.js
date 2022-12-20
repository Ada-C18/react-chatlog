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
        likeCount = {chat.likeCount}
        likeMessage = {props.likeMessage}
        />
        ))};
        </div>
    )
    
}

ChatLog.propTypes = {
    entries:PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string. isRequired,
        timeStamp: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        liked:PropTypes.bool.isRequired,
        likeCount:PropTypes.number.isRequired

    }))
    
    };


export default ChatLog;