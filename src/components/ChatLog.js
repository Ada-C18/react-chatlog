import React from 'react';
import ChatEntry from './ChatEntry';



const ChatLog = (props) => {
    const entries = props.entries;
    
    return (
        <div className= 'chat-log'>
        {
            entries.map((entry,id) => (
                <ChatEntry 
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                updateLikes={props.updateLikes}
                key={id}
            />
            )
            )}
        </div>
    )
};


export default ChatLog;
