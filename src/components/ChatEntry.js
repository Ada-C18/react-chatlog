import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [isClicked, setIsClicked] = useState('🤍');
  const toggleClicked =() => {
    if (isClicked === '🤍'){
      setIsClicked('❤️');
      props.updateLikes(true)
    }else {
      setIsClicked('🤍');
      props.updateLikes(false)
    }
      
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"> <TimeStamp time={props.timeStamp}/> </p>
        <button className="like" onClick={toggleClicked} >{isClicked}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
