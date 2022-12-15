import React from 'react';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
  const chatLogComponents = entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      </li>
    );
  });
  return <ul className="chat-log">{chatLogComponents}</ul>; // unorderlisted
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
