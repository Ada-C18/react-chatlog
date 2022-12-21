import React from 'react';
import PropTypes from 'prop-types';
import Message from './ChatEntry';

const ChatLog = ({ entries, onUpdateLikeStatus }) => {
  const getMessageList = (entries) => {
    return entries.map((message, i) => {
      return (
        <Message
          key={i}
          sender={message.sender}
          id={message.id}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onUpdateLike={onUpdateLikeStatus}
        />
      );
    });
  };
  return <ul className="messages_list">{getMessageList(entries)}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
  onUpdateLikeStatus: PropTypes.func,
};

export default ChatLog;
