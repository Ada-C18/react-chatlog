import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
// import chatMessages from '../data/messages.json';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <div className="chat-log">
      {props.entries.map((entry, i) => {
        return (
          <ChatEntry
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            onLike={props.onLike}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onLike: PropTypes.func.isRequired,
};

export default ChatLog;
