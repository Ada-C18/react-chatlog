import React from 'react';
import './Chatlog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import timeStamp from './TimeStamp.js';

const ChatLog = (props) => {
  const jsonMessages = props.entries.map((messages) => {
    return (
      <ChatEntry>
        id = {messages.id}
        sender={messages.sender}
        timeStamp={messages.timeStamp}
        liked={messages.liked}
      </ChatEntry>
    );
  });
  return <div className="chat-log">{jsonMessages}</div>;
};

ChatLog.propTypes = {
  message: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      handleLiked: PropTypes.func.isRequired,
      messageContent: PropTypes.number.isRequired,
    })
  ),
};
