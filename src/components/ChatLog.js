import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const getChatLogJSX = props.entries.map((entry, index) => {
    return (
      <ChatEntry
        key={index}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        id={entry.id}
        liked={entry.liked}
        updateChat={props.updateChat}
        sender1={props.sender1}
        sender2={props.sender2}
      />
    );
  });

  return <ul className="chat-log">{getChatLogJSX}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ),
  updateChat: PropTypes.func,
  sender1: PropTypes.string,
  sender2: PropTypes.string,
};

export default ChatLog;
