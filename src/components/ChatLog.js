import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (entries) => {
  const getChatLogJSX = (chats) => {
    return chats.map((chat) => {
      return (
        <ChatEntry
          id={chat.id}
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
          // liked={chat.liked}
        />
      );
    });
  };
  return <div className="chat-log">{getChatLogJSX(entries.chats)}</div>
};

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
};

export default ChatLog;