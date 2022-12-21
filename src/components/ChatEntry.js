import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp  from './TimeStamp';

const ChatEntry = (props) => {

  const heartColor = props.liked ? '❤️' : '🤍';
  const bubbleDirection = props.id % 2 === 0 ? 'chat-entry remote' : 'chat-entry local';

  return (
    <div className={bubbleDirection}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={() => props.toggleLike(props.id)}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool
};

export default ChatEntry;
