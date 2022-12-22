import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, likeMessage }) => {
  const chatLogEntries = entries.map(
    ({ id, sender, body, timeStamp, liked }) => {
      return (
        <ChatEntry
          key={id}
          id={id}
          sender={sender}
          body={body}
          timeStamp={timeStamp}
          liked={liked}
          likeMessage={likeMessage}
        />
      );
    }
  );

  return <div>{chatLogEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  likeMessage: PropTypes.func.isRequired,
};

export default ChatLog;
