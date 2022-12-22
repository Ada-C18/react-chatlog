import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, onUpdateChat}) => {
    const chatEntries = entries.map((chat, index) => {
        return (
            <ChatEntry
                onUpdateChat={onUpdateChat}
                id={chat.id}
                key={index + 1}
                sender={chat.sender}
                body={chat.body}
                timeStamp={chat.timeStamp}
                liked={chat.liked}/>  
        )
    })
    return (
        <div className="chat-messages">
            {chatEntries}
        </div>
)}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        key: PropTypes.number,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })
  ),
  onUpdateChat: PropTypes.func.isRequired,
};
export default ChatLog;