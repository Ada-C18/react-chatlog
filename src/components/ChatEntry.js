import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';
import { useState } from 'react';




const ChatEntry = (props) => {
  const [likeButton, setLikeButton] = useState('🤍') 
  const toggleClicked = () => {
    if (likeButton === '🤍' ) {
      setLikeButton('❤️')
      props.updateLikes(true)
    } else {
      setLikeButton('🤍');
      props.updateLikes(false)
    }
    
  }
  
  

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"> <TimeStamp time={props.timeStamp}/> </p>
        <button className="like" onClick= {toggleClicked}>{likeButton}</button>
      </section>
    </div>
  );
};

// {props.updateLikes}
ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
