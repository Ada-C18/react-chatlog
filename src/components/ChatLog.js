import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chat = props.entries.map((message) => {
    return (
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        onToggleHeart={props.onToggleHeart}
        liked={message.liked}
      />
    );
  });
  return <div className="chat-entry">{chat}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      liked: PropTypes.bool,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
  onToggleHeart: PropTypes.func,
};

export default ChatLog;
