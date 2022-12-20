import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, like, updateLike }) => {
  const heart = like ? '❤️' : '🤍';
  const localOrRemote =
    sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={localOrRemote}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={() => updateLike(id)}>
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  like: PropTypes.bool.isRequired,
  updateLike: PropTypes.func.isRequired,
};

export default ChatEntry;
