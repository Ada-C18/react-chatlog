import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ( props ) => {
  const getChatLog = ( chatMessages ) => {
    return chatMessages.map(( chatMessage ) => {
      return (
        <ChatEntry
        key = { chatMessage.id }
        id = { chatMessage.id }
        sender = { chatMessage.sender }
        body = { chatMessage.body }
        timeStamp = { chatMessage.timeStamp }
        liked = { chatMessage.liked }
        />
      );
    });
  };
  return <ul>
    {getChatLog( props.chatMessages )}
  </ul>
};


ChatLog.propTypes = {
  chatMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
};


export default ChatLog;