import React from 'react'
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'

const ChatLog = ({entries, toggleLike}) => {
    if (!entries) {
        return <section>Nothing here</section>
    }
    // let count
    const Logs = entries.map(entry => {
        
        return (<ChatEntry key={entry.id} 
                            id={entry.id} 
                            sender={entry.sender} 
                            body={entry.body} 
                            timeStamp={entry.timeStamp} 
                            liked={entry.liked} 
                            toggleLike = {toggleLike}/>)
    })
    return <section>{Logs}</section>
}

ChatLog.propTypes = {
    entries:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number, //not required b/c test data has none
            sender:PropTypes.string.isRequired,
            body:PropTypes.string.isRequired,
            timeStamp:PropTypes.string.isRequired,
            liked:PropTypes.bool //not required b/c not passed in all tests  
        })
    
    ),
    toggleLike:PropTypes.func //not required b/c not passed in all tests
  };

export default ChatLog;