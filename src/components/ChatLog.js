import React from 'react';
import './ChatLog.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chat = props.entries.map((message) => {
    return (
      <ChatEntry
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
      />
    );
  });
  return <div className="chat-entry">{chat}</div>;
};

ChatLog.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.number.isRequired,
};

export default ChatLog;
