import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { useState } from 'react';

const ChatEntry = ({
  id,
  sender,
  liked,
  timeStamp,
  body,
  onLike,
  firstSender,
}) => {
  const messageSide =
    firstSender === sender ? 'chat-entry local' : 'chat-entry remote';

  const handleLike = () => {
    onLike(id);
  };

  return (
    <div className={messageSide} key={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={() => handleLike()}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  firstSender: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ChatEntry;
