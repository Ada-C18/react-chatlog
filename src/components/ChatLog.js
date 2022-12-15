import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatLog = ({ entries }) => {
  const chatComponents = entries.map((message) => {
    return (
      <div className="chat-entry local">
        <h2 className="entry-name">{message.sender}</h2>
        <section className="entry-bubble">
          <p>{message.body}</p>
          <p className="entry-time">
            <TimeStamp time={message.timeStamp} />
          </p>
          <button className="like">🤍</button>
        </section>
      </div>
    );
  });

  return (
    <section>
      <p>{chatComponents}</p>
    </section>
  );
};

ChatLog.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatLog;
