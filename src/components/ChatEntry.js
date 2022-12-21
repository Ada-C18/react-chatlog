import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({id, sender, body, timeStamp, liked, handleLikes}) => {
  
  const updateMessage = ()=> {
    handleLikes({
      id,
      sender,
      body,
      timeStamp,
      liked :!liked
    })
  }
  
  const heartColor = liked ? '❤️': '🤍' ;
  const position = id %2 ? 'local' : 'remote';
  return (
    <div className={`chat-entry ${position}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button onClick={updateMessage} className="like" >{heartColor}</button>
        
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
  handleLikes:PropTypes.func.isRequired
};

export default ChatEntry;
