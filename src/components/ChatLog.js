import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chats = props.entries.map((entry, i) => {
    return (
      <ChatEntry
        key={i}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });
  return (
    <div>
      <div>{chats}</div>
    </div>
  );
};

ChatLog.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired,
};

export default ChatLog;
