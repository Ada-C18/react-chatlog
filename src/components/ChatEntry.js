import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  const chatAlign = (props) => {
    if (props.sender === 'Vladimir') {
      return 'chat-entry local';
    } else if (props.sender === 'Estragon') {
      return 'chat-entry remote';
    }
  };

  const heart = props.liked ? '❤️' : '🤍';
  return (
    <div className={chatAlign(props)}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button
          className="like"
          onClick={() => props.onHeartToggle(props.id, heart)}
        >
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onHeartToggle: PropTypes.func,
};

export default ChatEntry;
