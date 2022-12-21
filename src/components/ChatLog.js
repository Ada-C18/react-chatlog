import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import React from 'react';

const ChatLog = (props) =>{
    const chatMessagesData = props.entries.map((message, i) => {  
        return <ChatEntry
        key={i}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        likedCount = {message.likedCount}
        // onAddLike={props.onAddLike}
        onUpdateChat={props.onUpdateChat}
        />
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
    // onAddLike: PropTypes.func.isRequired,
    onUpdateChat: PropTypes.func

};


export default ChatLog