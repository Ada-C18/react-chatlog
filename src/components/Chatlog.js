import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const jsonMessages = props.entries.map((messages) => {
    return (
      <ChatEntry
        id={messages.id}
        sender={messages.sender}
        body={messages.body}
        timeStamp={messages.timeStamp}
        liked={messages.liked}
        key={messages.key}
        handleLike={props.setchatJson}
      ></ChatEntry>
    );
  });
  return <div className="chat-log">{jsonMessages}</div>;
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      key: PropTypes.number.isRequired,
    })
  ),
};

export default ChatLog;
