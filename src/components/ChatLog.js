import React from 'react';
//import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';



const ChatLog=(props)=>{
        const entries =props.entries;
    return(
        <ul className='chat-log'>
            {entries.map((entry)=>(
            <ChatEntry
            key={entry.id}
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}

            ></ChatEntry>
        ))}
        </ul>
        
        ); 
};


export default ChatLog;