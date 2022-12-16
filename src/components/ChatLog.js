import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css'


const ChatLog = ({ entries }) => {
    const chatEntryComponents = entries.map(entry => {
        return (
            <div><ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} /> </div>
        );
    });

    return (
        <div>{chatEntryComponents}</div>

    );

};

export default ChatLog;