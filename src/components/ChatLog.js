import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatLog = (props) => {
    const entries = props.entries.map((chat,i) => {
        return (
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
        )
    })


    return (
        <div>{entries}</div>
    )

}

ChatLog.propTypes = {
    entries:PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        liked:PropTypes.bool.isRequired,
        likeCount:PropTypes.number.isRequired
    })),
    likeMessage:PropTypes.func.isRequired
    };


export default ChatLog;