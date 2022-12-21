import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatEntries = props.entries.map((chatEntry,i) => {

        return (
            <ChatEntry
                key={i}
                id = {chatEntry.id}
                sender = {chatEntry.sender}
                body = {chatEntry.body}
                timeStamp = {chatEntry.timeStamp}
                liked = {chatEntry.liked}
                onUpdateChatData = {props.onUpdateChatData}
            />
        )
    })


    return (
        <div>{chatEntries}</div>
    )

}

ChatLog.propTypes = {
    entries:PropTypes.arrayOf(PropTypes.shape({
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        liked:PropTypes.bool.isRequired,
    })),
    onUpdateChatData: PropTypes.func.isRequired
};


export default ChatLog;