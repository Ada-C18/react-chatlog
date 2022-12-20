import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = (props) => {

  let likeIcon = '🤍'
  if (props.liked) {
    likeIcon = '❤️'
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button onClick={() => props.onToggleLiked(props.id)}>{likeIcon}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired, // ?????? is this the right type?
  liked: PropTypes.bool.isRequired,
  onToggleLiked: PropTypes.func.isRequired, 
  id: PropTypes.number.isRequired
};

export default ChatEntry;
