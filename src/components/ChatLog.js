import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';


const ChatLog = ({entries,updateLikes}) => {
    // const chatMessages = props.entries;
    // const chats = chatMessages.map((chat) => (
    return (
    <div className="chat-log">
        {entries.map((entry) => (
        <ChatEntry 
            sender={entry.sender}
            body = {entry.body}
            timeStamp = {entry.timeStamp} 
            updateLikes ={updateLikes}
            />
        ))}
    </div>  
    );         
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
    // entries: PropTypes.arrayOf(PropTypes.shape({
    //     sender: PropTypes.string.isRequired,
    //     body: PropTypes.string.isRequired,
    //     timeStamp: PropTypes.string.isRequired, 
    //     // heartChange: PropTypes.bool.isRequired,
    // }))

};
export default ChatLog;