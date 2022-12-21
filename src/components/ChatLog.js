import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatLogComponent = props.entries.map((entry) => {
        return (
            <ChatEntry 
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
            />
        );
    });
    return (<div>
        {chatLogComponent}
    </div>)
}

ChatLog.prototype = {
    entries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLog