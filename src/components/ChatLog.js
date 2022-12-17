import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <div>
      {props.entries.map((message) => (
        <ChatEntry
          key={message.timeStamp}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
};
export default ChatLog;
