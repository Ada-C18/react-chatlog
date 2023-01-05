import React from 'react';
import PropTypes from 'prop-types';

import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const getEntries = 
    props.entries.map((entry)=> {
        return (
            <ChatEntry
                sender={entry.sender}
                id={entry.id}
                body={entry.body}
                liked={entry.liked}
                timeStamp={entry.timeStamp}
                key={entry.id}
                onLiked={props.onLiked}
            />
            );
        });
        return <div>{getEntries}</div>;
    };

    ChatLog.propTypes = {
        entries: PropTypes.arrayOf(PropTypes.shape({
            sender: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            body: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            timeStamp: PropTypes.string.isRequired
        })),
        onLiked: PropTypes.func.isRequired,
    };
    
export default ChatLog;