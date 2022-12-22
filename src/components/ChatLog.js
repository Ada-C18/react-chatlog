import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onUpdateEntry }) => {
  const chatlogMessages = entries.map((entry) => {
    return (
      <div className="">
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          id={entry.id}
          isLiked={entry.liked}
          onUpdateEntry={onUpdateEntry}
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
  onUpdateEntry: PropTypes.func.isRequired,
};
export default ChatLog;
