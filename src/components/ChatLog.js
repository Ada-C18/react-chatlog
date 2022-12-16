import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return props.entries.map((message) => {
    console.log(message);
    return (
      <ChatEntry
        key={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
      ></ChatEntry>
    );
  });
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
