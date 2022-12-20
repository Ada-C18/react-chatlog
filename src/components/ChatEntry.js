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

  const [likedClass, likedIcon] = message.liked
    ? ['liked', '❤️']
    : ['unliked', '🤍'];
  const localRemoteClass = message.localRemote ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${localRemoteClass}`}>
      <h2 className="entry-name">{message.sender}</h2>
      <section className="entry-bubble">
        <p>{message.body}</p>
        <p className="entry-time">
          <TimeStamp time={message.timeStamp}></TimeStamp>
        </p>
        <button className={`like ${likedClass}`} onClick={onLikeButtonClick}>
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
  localRemote: PropTypes.bool,
  onUpdate: PropTypes.func,
};

export default ChatEntry;
