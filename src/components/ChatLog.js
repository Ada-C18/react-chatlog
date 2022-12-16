// import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry'

const ChatLog = ({entries}) => {
    const chatComponents = []
    console.log(entries);
    for (const chat of entries){
        chatComponents.push(
            <ChatEntry
                key={chat.id}
                id={chat.id}
                sender={chat.sender}
                body={chat.body}
                timeStamp={chat.timeStamp}
            />
        );
    }
    return (
        <div>{chatComponents}</div>
    );
};
ChatLog.propTypes = {
    chatLog: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired
        })
    )
};

export default ChatLog;