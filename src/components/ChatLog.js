import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const entries = props.entries;

  const getChatLogJSX = entries.map((entry, i) => {
    return (
      <div className="chat-log" key={i}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onUpdate={props.onUpdateMessage}
        />
      </div>
    );
  });

  return getChatLogJSX;
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
  ).isRequired,
  onUpdateMessage: PropTypes.func.isRequired,
};

export default ChatLog;
