import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';





const ChatLog = ({entries}) => {


const LOGS = entries.map((entry) => {
        return(
            <ChatEntry
            key = {entry.id}
            sender = {entry.sender} 
            body= {entry.body} 
            timeStamp = {entry.timeStamp}/>
       
        )
    });

    return (
        <div>
        {LOGS}
        </div>
    );
    }; 

    ChatLog.propTypes = {
        entrys: PropTypes.arrayOf(PropTypes.object).isRequired
        
    }


  


export default ChatLog;

