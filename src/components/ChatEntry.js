import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import React, { useState } from 'react';

const ChatEntry = (props) => {
  const [heartCount, setheartCount] = useState(0)
  const [isLiked, setIsLiked] = useState(props.liked)

  return (
    <div className={props.sender === 'Vladimir' ? 'chat-entry local': 'chat-entry remote'}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp
        time={props.timeStamp}
        /></p>
        <button onClick={(e)=>setheartCount(heartCount => heartCount + 1) }className="like">{heartCount ? `${heartCount} ❤️s`: '🤍'} </button>
        {/* <button onClick={(e)=>{setheartCount(heartCount => heartCount + 1); setIsLiked(!isLiked)}} className="like"> {isLiked ? '❤️': '🤍'}</button> */}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender:PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
