import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';
import React from 'react';
import './ChatLog.css';

const ChatLog = props =>
{
    const chatComponents = props.entries.map((messages) => (
        <ChatEntry
            key={messages.id}
            id={messages.id}
            sender={messages.sender}
            body={messages.body}
            timeStamp={messages.timeStamp}
        />
    ));
    
    return (
        <div className='chat-log'>
            {chatComponents}
        </div>
    );
}


ChatLog.propTypes = {
    //Fill with correct proptypes
    entries: PropTypes.array.isRequired,    
};

export default ChatLog;