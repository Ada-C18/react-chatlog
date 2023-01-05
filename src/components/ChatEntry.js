import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  console.log(props.timeStamp);
  const sender = props.sender;
  const senderBody = props.body;
  const timeStamp = props.timeStamp;

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{senderBody}</p>
        <div className="entry-time">
          <TimeStamp time={timeStamp} />
        </div>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
