import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const allMessages = props.entries.map((messageData) => {
    return (
      <div>
        <ChatEntry
          key={messageData.id}
          sender={messageData.sender}
          body={messageData.body}
          timeStamp={messageData.timeStamp}
        ></ChatEntry>
      </div>
    );
  });

  return <section className="chat-log">{allMessages}</section>;
};

ChatLog.propTypes = {
  // Fill with correct proptypes
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
};

export default ChatLog;
