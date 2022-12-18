import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <div className=".chat-log">
      <ul>
        {props.entries.map((entry) => (
          <ChatEntry
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
          />
        ))}
      </ul>
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
