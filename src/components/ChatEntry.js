import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ sender, body, timeStamp, isLiked, id, onUpdateEntry }) => {
  const updateLike = () => {
    onUpdateEntry({
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !isLiked,
      id: id,
    });
    
    //function if like is true vs. like is false
    console.log('running updateLike');
  };

  const heart = isLiked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name"> {sender} </h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          {' '}
          <TimeStamp time={timeStamp} />{' '}
        </p>

        <button className='' onClick={updateLike}>
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
};

export default ChatEntry;
