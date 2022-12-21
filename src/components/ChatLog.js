import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry, index) => {
    return (
      <ul key={index}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          id={entry.id}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          setUpdateLikes={props.setUpdateLikes}
        />
      </ul>
    );
  });

  return <section>{chatEntries}</section>;
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
  setUpdateLikes: PropTypes.func,
};

export default ChatLog;
