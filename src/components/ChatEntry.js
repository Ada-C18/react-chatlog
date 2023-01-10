import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ sender, body, timeStamp, isLiked, id, updateEntry }) => {
  const updateLike = () => {
    updateEntry({
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !isLiked,
      id: id,
    });
    // console.log('running updateLike');
  };

  const heart = isLiked ? '❤️' : '🤍';
  const locationClass = id % 2 === 0 ? 'remote' : 'local';

  return (
    <div className={'chat-entry ' + locationClass}>
      <h2 className="entry-name"> {sender} </h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>

        <button className="like" onClick={updateLike}>
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
  isLiked: PropTypes.bool,
  updateEntry: PropTypes.func.isRequired,
};

export default ChatEntry;
