import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onUpdate }) => {
  const chatComponents = entries.map((entry, index) => {
    return (
      <ChatEntry
        key={index}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdate={onUpdate}
      ></ChatEntry>
    );
  });

  return <section>{chatComponents}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string,
      id: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onUpdate: PropTypes.func.isRequired,
};
export default ChatLog;
