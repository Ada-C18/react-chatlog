import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const entries = props.chatData.map((chat, i) => {
        return <ChatEntry
        key ={i}
        sender={chat.sender}
        body ={chat.body}
        timeStamp={chat.timeStamp}
        />
    })
    return (<div>
        <div>
            {entries}
        </div>
    </div>);
}
export default ChatLog;