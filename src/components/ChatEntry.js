import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const chat = {
    id: props.id,
    sender: props.sender,
    body: props.body,
    timeStamp: props.timeStamp,
    // liked: false
    };

  let sender;
  if (props.sender === 'Vladimir') {
    sender = 'chat-entry local';
  } else {
    sender = 'chat-entry remote';
  };

  return (
    <div className={sender}>
      <h2 className="entry-name">{chat.sender}</h2>
      <section className="entry-bubble">
        <p>{chat.body}</p>
        <p className="entry-time"><TimeStamp time = {chat.timeStamp}></TimeStamp></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
