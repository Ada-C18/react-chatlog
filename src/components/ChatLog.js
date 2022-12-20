import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
  const chatLogEntries = entries.map(({ sender, body, timeStamp }) => {
    return <ChatEntry sender={sender} body={body} timeStamp={timeStamp} />;
  });

  return <div>{chatLogEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
