import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  const sender = props.sender;
  console.log(props.timeStamp);
  const senderBody = props.body;

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{senderBody}</p>
        <p className="entry-time">
          <p className="entry-time">{TimeStamp(props.timeStamp)}</p>
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.func.isRequired,
};

export default ChatEntry;
