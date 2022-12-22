import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';





const ChatLog = ({entries, updateLikeCount}) => {
// const updatedLikeCount = entries.updatedLikeCount;



const LOGS = entries.map((entry) => {
        return(
            <ChatEntry
            key = {entry.id}
            sender = {entry.sender} 
            body= {entry.body} 
            timeStamp = {entry.timeStamp}
            updateLikeCount={updateLikeCount}
            /> 
            //line 22 refers ro line 11. Every chat will use call back function
       
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

