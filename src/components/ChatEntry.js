import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const heartColor = props.liked ? '❤️' : '🤍';

  const typeOfMessage = () => {
    if (props.sender === 'Vladimir') {
      return 'local';
    } else {
      return 'remote';
    }
  };

  const textColor = () => {
    const messageType = typeOfMessage();
    if (messageType === 'local') {
      return props.userColors.local;
    } else {
      return props.userColors.remote;
    }
  };

  return (
    <div className={`chat-entry ${typeOfMessage()}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={textColor()}>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={() => props.toggleLiked(props.id)}>
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
