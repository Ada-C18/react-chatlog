import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
    const chatMessages = props.entries;
    const chats = chatMessages.map((chat) => (
    <ChatEntry 
        sender={chat.sender}
        body = {chat.body}
        timeStamp = {chat.timeStamp} 
    />

    ));



    return <div>{chats}</div>
            
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired, 
        heartChange: PropTypes.bool.isRequired,
    }))

};
export default ChatLog;