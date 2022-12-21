import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const handleLikeButton = () => {
    props.onLikeMessage(props.id);
  }
  const heartButton = props.liked ? '❤️': '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.TimeStamp} />
        </p>
        <button className="like" onClick={handleLikeButton}>{heartButton}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  TimeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeMessage: PropTypes.func,
};

export default ChatEntry;
