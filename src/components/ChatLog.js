import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onToggleHeart }) => {
  return (
    <div>
      {entries.map((entry, index) => (
        <ChatEntry
          key={index}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onToggleHeart={onToggleHeart}
        />
      ))}
    </div>
  );
};

// propTypes
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  onToggleHeart: PropTypes.func,
};

export default ChatLog;
