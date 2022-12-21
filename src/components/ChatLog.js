import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = (props) => {
    const chatEntryComponent = props.entries.map((entry,index) => {
        return (
            <ChatEntry 
                key={index}
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                onLikeMessage={props.onLikeMessage}
            />
        );
    });
    return <div className='chat-log'> 
        {chatEntryComponent}
    </div>

    // const chatEntryComponent = []
    // for (const Chat)
}

ChatLog.prototype = {
    entries: PropTypes.arrayOf(PropTypes.object),
    onLikeMessage: PropTypes.func.isRequired,
};

export default ChatLog