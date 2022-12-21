import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  const getChatLogJSX = (messages) => {
    return messages.map((message) => {
      return (
        <ChatEntry
          id={message['id']}
          key={message['id']}
          sender={message['sender']}
          body={message['body']}
          timeStamp={message['timeStamp']}
          liked={message['liked']}
          onLikeMessage={props.onLikeMessage}
        />
      );
    });
  };
  return <ul>{getChatLogJSX(props.entries)}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      key: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  onLikeMessage: PropTypes.func,
};

export default ChatLog;
