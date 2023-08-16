import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [isClicked, setIsClicked] = useState('🤍');
  const [liked, setLiked]= useState(props.liked); 
  const toggleClicked =() => {
    if (isClicked === '🤍'){
      setIsClicked('❤️');
      props.updateLikes(true)
    }else {
      setIsClicked('🤍');
      props.updateLikes(false)
    }
  }
  const isLiked = (liked) => {
    if (props.liked){
      setLiked(true)
    }else{
      setLiked(false)
    }
  
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"> <TimeStamp time={props.timeStamp}/> </p>
        {/* <button className="like" onClick={toggleClicked} >{isClicked}</button> */}
        <button className="like" onClick={ ()=>{toggleClicked();isLiked()}} >{isClicked}</button>
    
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default ChatEntry;
