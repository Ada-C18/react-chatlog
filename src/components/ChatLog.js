import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const getChatLog = (props) => {
    return props.entries.map((chatEntry) => {
      return (
        <ChatEntry
          key={chatEntry.id}
          id={chatEntry.id}
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
          liked={chatEntry.liked}
          onLike={props.onLike}
          remoteSend={props.remoteSender===chatEntry.sender}
        />
      );
    });
  };
  return <div className="chat-log">{getChatLog(props)}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timestamp: PropTypes.string,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onLike: PropTypes.func,
  remoteSender: PropTypes.string
};

export default ChatLog;
