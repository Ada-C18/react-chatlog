import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const entryComponants = props.entries.map((message, index) => {
        return(
            <li key={index}>
                <ChatEntry 
                    id = {message.id}
                    sender={message.sender} 
                    body={message.body} 
                    liked = {message.liked}
                    timeStamp={message.timeStamp}
                    onToggleLike = {props.onToggleLike}
                ></ChatEntry>
            </li>
        );
    });

    return (
        <section className="chat-log">
            <ul>
                {entryComponants}
            </ul>  
        </section>

    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
    onToggleLike: PropTypes.func,
};

export default ChatLog;