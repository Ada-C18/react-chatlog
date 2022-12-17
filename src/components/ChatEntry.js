import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ onUpdate, ...message }) => {
  const onLikeButtonClick = () =>
    onUpdate({
      ...message,
      liked: !message.liked,
    });
  let [likedClass, likedIcon] = message.liked
    ? ['liked', '❤️']
    : ['like', '🤍'];
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{message.sender}</h2>
      <section className="entry-bubble">
        <p>{message.body}</p>
        <p className="entry-time">
          <TimeStamp time={message.timeStamp}></TimeStamp>
        </p>
        <button className={likedClass} onClick={onLikeButtonClick}>
          {likedIcon}
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
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
