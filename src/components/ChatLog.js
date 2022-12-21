import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
    return (
        <>
            {props.entries.map((entry) => (
                <ChatEntry className="chat-log"
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    key={entry.id}
                    onClickLike={props.onClickLike}
                />
            ))}
        </>
    )
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })),
    onClickLike: PropTypes.func.isRequired, 
};

export default ChatLog;