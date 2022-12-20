import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const message = props.body;
  const formattedTimeStamp = <TimeStamp time={props.timeStamp}></TimeStamp>;
  const sender = props.sender;
  const changeLikeStatus = () => {
    const updatedChat = {
      id: props.id,
      sender: sender,
      body: message,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updatedChat);
  };
  const heartDisplay = props.liked ? '❤️' : '🤍';

  let containerClass = '';
  if (sender === 'Vladimir') {
    containerClass = 'chat-entry local';
  } else {
    containerClass = 'chat-entry remote';
  }

  return (
    <div className={containerClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{message}</p>
        <p className="entry-time">{formattedTimeStamp}</p>
        <button onClick={changeLikeStatus} className="like">
          {heartDisplay}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func,
};

export default ChatEntry;
