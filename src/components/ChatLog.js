import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';
import React from 'react';
import './ChatLog.css';

const ChatLog = props =>
{
    const chatComponents = props.entries.map((entry) => (
        <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            updateHeartStatus={props.updateHeartStatus}
        />
    ));
    
    return (
        <div className='chat-log'> {chatComponents} </div>
    );
}


ChatLog.propTypes = {
    //Fill with correct proptypes
    entries: PropTypes.array.isRequired, 
    updateHeartStatus: PropTypes.func.isRequired,
};

export default ChatLog;