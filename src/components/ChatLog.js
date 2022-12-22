import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  return (
    <ul className="chat-log">
      {props.entries.map((message, i) => {
        return (
          <ChatEntry
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            key={i}
            liked={message.liked}
            id={message.id}
            onUpdateLikeCount={props.onUpdateLikeCount}
          />
        );
      })}
    </ul>
  );
};

ChatLog.prototype = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  onUpdateLikeCount: PropTypes.func.isRequired,
};

export default ChatLog;
