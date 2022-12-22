import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = ({ id, sender, body, timeStamp, liked, updateEntries }) => {
  const css = sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  const onHeartClick = () => {
    // liked prop is updated
    updateEntries({
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    });
  };

  const like = liked ? '❤️' : '🤍';

  return (
    <div className={css}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={onHeartClick}>
          {like}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  like: PropTypes.bool,
  updateEntries: PropTypes.func.isRequired,
};

export default ChatEntry;
