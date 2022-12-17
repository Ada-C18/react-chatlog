import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types'
const ChatLog = (props) => {
  const entries = 
    props.entries.map((entry) => {
      return (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          time={entry.timeStamp}
          liked={entry.liked}
        />
      );
    });
    return <div>{entries}</div>;
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
  toggleHeart: PropTypes.func.isRequired
};

export default ChatLog;
