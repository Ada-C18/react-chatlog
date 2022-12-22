import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, updateLikes }) => {
  const getChatEntryJSX = (entries) => {
    return entries.map((entry) => {
      return (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          updateLikes={updateLikes}
        />
      );
    });
  };
  return getChatEntryJSX(entries);
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default ChatLog;
