import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <ul className="chat-log">
      {props.entries.map((chat, i) => {
        return (
          <ChatEntry
            sender={chat.sender}
            body={chat.body}
            timeStamp={chat.timeStamp}
            key={i}
          />
        );
      })}
    </ul>
  );
};

ChatLog.prototype = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
};

export default ChatLog;
