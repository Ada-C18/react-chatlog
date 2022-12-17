import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const heartColor = props.like ? 'redheart' : 'grayheart';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <p className="like-count">{props.likeCount}</p>
        <button
          className={heartColor}
          onClick={() => props.onLikeMessage(props.id)}
        >
          🤍
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
};

export default ChatEntry;
