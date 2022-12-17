import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onUpdateChatEntry }) => {
  const chatLog = entries.map((message) => {
    return (
      <ChatEntry
        {...{
          key: message.id,
          onUpdate: onUpdateChatEntry,
          ...message,
        }}
      ></ChatEntry>
    );
  });
  const totalLikes = entries.reduce(
    (count, message) => count + (message.liked ? 1 : 0),
    0
  );
  return (
    <div className="chat-log">
      <div className="total-likes">{totalLikes ? `${totalLikes} ❤️s` : ``}</div>
      {chatLog}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      onUpdate: PropTypes.func,
    })
  ),
  onUpdateChatEntry: PropTypes.func,
};

export default ChatLog;
