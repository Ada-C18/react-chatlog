import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const createChat = (message, index) => {   
    return (
    <ChatEntry

            id={message.id}
            key={index}
            sender={message.sender}
            body={message.body}
            updateText={props.updateText}
            liked={message.liked}
            totalLikes={props.totalLikes}
            updateTotalLikes={props.updateTotalLikes}
            timeStamp={message.timeStamp}
        />
        );
    };
    return (
        <div className="chat-log">
    
        {props.entries && props.entries.map(createChat)}
        </div>
    )
};
ChatLog.propTypes = {

    entries: PropTypes.arrayOf(
        PropTypes.shape({
        body: PropTypes.string.isRequired,
        id: PropTypes.number,
        liked: PropTypes.bool,
        sender: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        })
    ).isRequired,
    totalLikes: PropTypes.number,
    updateText: PropTypes.func,
    updateTotalLikes: PropTypes.func,
};

export default ChatLog;