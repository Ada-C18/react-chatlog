import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css'


const ChatLog = ( props ) => {
    const getChatLogJSX = (props) => {
        return props.entries.map((entry) => {
            return (
                <ChatEntry
                    key={entry.id}
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    onLikeMessage={props.onLikeMessage}
                />
            );
        });
    };
    return <ul>{getChatLogJSX(props)}</ul>
};

ChatLog.propTypes = {
    messageData: PropTypes.arrayOf(
    PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    })),
    onLikeMessage:PropTypes.func.isRequired};

export default ChatLog;