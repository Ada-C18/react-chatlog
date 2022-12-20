import React from 'react';
import PropTypes from 'prop-types';
import './ChatLog.css';

import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const handleLike = props.handleLike;

  const messages = props.messages.map((message) => {
    return (
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        className="chat-log"
        liked={message.liked}
        handleLike={handleLike}
      />
    );
  });

  return <ul>{messages}</ul>;
};

ChatEntry.propTypes = {
  ChatEntry: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  handleLike: PropTypes.func.isRequired,
};

export default ChatLog;
