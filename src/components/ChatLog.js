import PropTypes from 'prop-types';
import React from 'react';
import ChatEntry from './ChatEntry.js';

import './ChatLog.css';

function ChatLog({chats}){
    // console.log('a')
    // console.log('a',chats)
    const chatComponents = [];


    for (const chat of chats) {
        console.log('chat',chat)
        chatComponents.push(
            <ChatEntry
            id={chat.id}
            Sender={chat.sender}
            Body={chat.body}
            TimeStamp={chat.timeStamp}
            liked={chat.liked}
            />
        );
        };


  return <div>{chatComponents}</div>;
};
ChatLog.propTypes = {
    ChatLog: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            Sender: PropTypes.string.isRequired,
            Body: PropTypes.string.isRequired,
            TimeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
        })
    ),
}

export default ChatLog;
