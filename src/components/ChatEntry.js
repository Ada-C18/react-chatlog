import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked }) => {
  let classLocation = 'chat-entry local';
  if (id % 2 === 0) {
    classLocation = 'chat-entry remote';
  }

  const [isliked, setLiked] = useState(liked);
  const heartEmodji = isliked ? '❤️' : '🤍';
  const changeLiked = () => {
    setLiked(!isliked);
  };

  return (
    <div className={classLocation}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={changeLiked}>
          {heartEmodji}
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
};

export default ChatEntry;
