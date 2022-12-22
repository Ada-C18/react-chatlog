import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';





const ChatLog = ({entries, updateLikeCount}) => {




const LOGS = entries.map((entry) => {
        return(
            <ChatEntry
            key = {entry.id}
            sender = {entry.sender} 
            body= {entry.body} 
            timeStamp = {entry.timeStamp}
            updateLikeCount={updateLikeCount}
            /> 
           
       
        )
    });

    return (
        <div>
        {LOGS}
        </div>
    );
    }; 

    ChatLog.propTypes = {
        entrys: PropTypes.arrayOf(PropTypes.object).isRequired,
        updatedLikeCount:PropTypes.func.isRequired,
    }

  
  


export default ChatLog;

