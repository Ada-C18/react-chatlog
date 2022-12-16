import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';

import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messages = props.messages.map((message) => {
    return (
      <ChatEntry
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        className="chat-log"
      />
    );
  });

  return <ul>{messages}</ul>;
};

ChatEntry.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatLog;
