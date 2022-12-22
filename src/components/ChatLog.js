import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateEntry }) => {
  const chatlogMessages = entries.map((entry) => {
    return (
      <div key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          id={entry.id}
          isLiked={entry.liked}
          updateEntry={updateEntry}
        />
      </div>
    );
  });
  return chatlogMessages;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      id: PropTypes.number,
      isLiked: PropTypes.bool,
    })
  ),
  updateEntry: PropTypes.func,
};
export default ChatLog;
