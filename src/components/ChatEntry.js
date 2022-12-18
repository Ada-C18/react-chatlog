import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp.js';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const buttonClass = props.liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={() => props.onLikeEntry(props.id)}>
          {buttonClass}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  liked: PropTypes.bool.isRequired,
  onLikeEntry: PropTypes.func.isRequired,
};

export default ChatEntry;
