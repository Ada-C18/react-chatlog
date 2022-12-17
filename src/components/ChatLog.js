import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const entryComponants = props.entries.map(message => {
        return(
            <li key={message.id}><ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp}></ChatEntry></li>
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
};

export default ChatLog;