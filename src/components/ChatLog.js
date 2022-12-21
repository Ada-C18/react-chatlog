import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import React from 'react';

const ChatLog = (props) =>{
    const chatMessagesData = props.entries.map(message => {  
        return (
        <div key={message.id}>
            <ChatEntry
            id={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
            onUpdateChat={props.onUpdateChat}
            />
        </div>
        )
    });
    return (<div>
        <div>{chatMessagesData}</div>
        </div>
        );
};


ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp:PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired

    })),
    onUpdateChat: PropTypes.func.isRequired

};


export default ChatLog