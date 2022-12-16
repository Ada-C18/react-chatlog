import React from 'react'
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'

const ChatLog = ({entries, toggleLike}) => {
    if (!entries) {
        return <div>Nothing here</div>
    }
    // let count
    const Logs = entries.map(entry => {
        
        return (<ChatEntry key={entry.id }id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp} liked={entry.liked} toggleLike = {toggleLike}/>)
    })
    return (<div>{Logs}</div>)
}

ChatLog.propTypes = {
    entries:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number,
            sender:PropTypes.string.isRequired,
            body:PropTypes.string.isRequired,
            timeStamp:PropTypes.string.isRequired  
        })
    
    ),
    toggleLike:PropTypes.func
  };

export default ChatLog;