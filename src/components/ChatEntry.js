import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onUpdate }) => {
  return (
    <div className={id % 2 === 1 ? 'chat-entry local' : 'chat-entry remote'}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp timeStamp={timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={() => onUpdate(id)}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  chatInfo: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string,
      id: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired,
      onUpdate: PropTypes.func.isRequired,
    })
  ),
};

export default ChatEntry;
