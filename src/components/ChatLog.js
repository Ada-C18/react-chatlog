import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <>
      <h2>Something</h2>
      <ul>
        {props.entries.map((entry) => (
          <ChatEntry
            sender={entry.sender}
            id={entry.id}
            key={entry.id}
            liked={entry.liked}
            body={entry.body}
            timeStamp={entry.timeStamp}
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
};

export default ChatLog;
