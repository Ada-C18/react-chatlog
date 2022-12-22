import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';


const ChatLog = ( props ) => {
  const getChatLog = ( entries ) => {
    return props.entries.map(( chatMessage ) => {
      return (
        <ChatEntry
        key = { chatMessage.id }
        id = { chatMessage.id }
        sender = { chatMessage.sender }
        body = { chatMessage.body }
        timeStamp = { chatMessage.timeStamp }
        liked = { chatMessage.liked }
        onLikedChatMessage = { props.onLikedChatMessage }
        />
      );
    });
  };
  return <ul>
    {getChatLog( props.entries )}
  </ul>
};


ChatLog.propTypes = {
  chatMessages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onLikedChatMessage: PropTypes.func.isRequired,
};


export default ChatLog;