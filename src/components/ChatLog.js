import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, localUser, updateChatEntry }) => {
  return entries.map((message) => {
    return (
      <ChatEntry
        {...{
          key: message.id,
          onUpdate: updateChatEntry,
          localRemote: message.sender === localUser,
          ...message,
        }}
      ></ChatEntry>
    );
  });
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
      localUser: PropTypes.string,
    })
  ),
  updateChatEntry: PropTypes.func,
};

export default ChatLog;
