import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';



const ChatLog = ({entries, likesCountCallBack}) => {
    const chatComponents = entries.map((chat) => {  
    return (
    <ChatEntry 
    key = {chat.id}
    id = {chat.id}
    sender={chat.sender} 
    body = {chat.body} 
    timeStamp = {chat.timeStamp}
    liked = {chat.liked}
    likesCountCallBack = {likesCountCallBack}
    />
    );
});


    return (
        <div>
            {chatComponents}
        </div>
    );
};

ChatLog.propTypes = {
    chatLogData: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked:PropTypes.bool.isRequired,
            likesCountCallBack: PropTypes.func.isRequired,
        })
    ),
};


export default ChatLog;