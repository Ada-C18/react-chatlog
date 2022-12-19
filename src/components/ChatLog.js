import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <>
      <ul>
        {props.entries.map((entry) => (
          <ChatEntry
            sender={entry.sender}
            id={entry.id}
            key={entry.id}
            liked={entry.liked}
            body={entry.body}
            timeStamp={entry.timeStamp}
            onSetLiked={props.onSetLiked}
          />
        ))}
      </ul>
    </>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onSetLiked: PropTypes.func.isRequired,
};

export default ChatLog;
