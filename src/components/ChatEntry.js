import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onToggleHeart }) => {
  const displaySide = sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${displaySide}`}>
      <h2 className="entry-name">{sender} </h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp dataTime={timeStamp} />
        </p>
        <button className="like" onClick={() => onToggleHeart(id)}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

// propTypes
ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onToggleHeart: PropTypes.func,
};

export default ChatEntry;
