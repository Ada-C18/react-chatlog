import React from 'react';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, updateEntries }) => {
  const chatLogComponents = entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          updateEntries={updateEntries}
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
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  updateEntries: PropTypes.func.isRequired,
};

export default ChatLog;
