import React from "react";
import ChatEntry from "./ChatEntry";
import './ChatLog.css';
import PropTypes from 'prop-types';

const createChat = (message) => {
    return <ChatEntry sender = {message.sender}/>;
}

function ChatLog(props) {
    const chatMessages = props.entries.map(createChat)
    
    return (
        <div className='chat-log'>
            <p>
                {chatMessages}
            </p>
        </div>
    )

}

ChatEntry.propTypes = {
    entries: PropTypes.array,
};

export default ChatLog;