import React from 'react';
import './ChatLog.css';
// import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onToggleHeart }) => {
  const chat = entries.map((message) => {
    return (
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        onToggleHeart={onToggleHeart}
        liked={message.liked}
      />
    );
  });
  return <div className="chat-entry">{chat}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onToggleHeart: PropTypes.func.isRequired,
};

export default ChatLog;
