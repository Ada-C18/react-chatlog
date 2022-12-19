import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import {useState} from 'react';



const ChatEntry = (props) => {
  const[likeTurnsRed, setLiked] = useState('🤍');
  const[likeCount, setLikeCount] = useState(0);

  const handleOnClickCount = () => {
    setLiked('❤️')
    setLikeCount(1)
  }

  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button onClick ={handleOnClickCount} className="like">{likeTurnsRed}</button>
        <p>{likeCount}</p>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired
};

export default ChatEntry;
