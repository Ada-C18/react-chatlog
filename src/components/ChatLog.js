import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const getChatLog = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timestamp={entry.timestamp}
        liked={entry.liked}
      />
    );
  });
  return <section>{getChatLog}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
};

export default ChatLog;
