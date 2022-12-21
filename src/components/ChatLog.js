import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatEntries = props.entries.map((chatEntry, index) => {
        return (
            <ChatEntry
                id={chatEntry.id}
                sender={chatEntry.sender}
                body={chatEntry.body}
                timeStamp={chatEntry.timeStamp}
                liked={chatEntry.liked}
                onUpdateChatEntry={props.onUpdateChatEntry}
                // every list needs a key identifier (not a prop)
                key={index}
            />
        );
    });

    return <div>{chatEntries}</div>;
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
        })
    ),
    onUpdateChatEntry: PropTypes.func.isRequired,
};

export default ChatLog;
