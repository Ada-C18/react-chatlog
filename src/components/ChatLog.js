import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';



const ChatLog = ({entries, updateChatData}) => {
    const chatLogComponents = entries.map((entry) => {
        return (
            <section key= {entry.body}>
                <ChatEntry
                sender={entry.sender}
                body={entry.body}
                id={entry.id}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                updateChatData={updateChatData}
                />
            </section>
        )
    });

    return (
        <section className='chat-log'>
            {chatLogComponents}
        </section>
    )
}



ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            updateChatData: PropTypes.func.isRequired
        })
    )
}

export default ChatLog;


