import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const createChat = (message) => {
    return <ChatEntry sender={message.sender} body = {message.body} />;
};
const ChatLog = (props) => {

    return (
        <div className= "chat-log">
        {props.entries.map(createChat)}
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired
};

export default ChatLog;