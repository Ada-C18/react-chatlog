import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

// const ChatLog = (props) => {
//     const chats = props.chatData.map((chat, i) => {
//         return <ChatEntry
//         key ={i}
//         sender={chat.sender}
//         body ={chat.body}
//         timeStamp={chat.timeStamp}
//         />
//     })

const ChatLog = (props) => {
    const chatMessages = props.entries;
    const chats = chatMessages.map((chat) => (
    <ChatEntry 
        sender={chat.sender}
        body = {chat.body}
        timeStamp = {chat.timeStamp} 
    />

    ));


//  ChatLog = (entries) => {
//     const chatMessages = entries.chatMessages;
//     const chats = chatMessages.map((chat) => (
//     <ChatEntry 
//     sender={chat.sender}
//     body = {chat.body}
//     timeStamp = {chat.timeStamp}

//     />
    
//     ));


    return <div>{chats}</div>
            
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired, 
    }))

};
export default ChatLog;