import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import TimeStamp from './TimeStamp'

const ChatLog = (props) => {
  return(
  <ul>
    {props.chatData.map((chat) => (
      <ChatEntry
        id = {chat.id}
        sender = {chat.sender}
        body = {chat.body}
        timeStamp = {chat.timeStamp}
        liked = {chat.liked}
      />
    ))}
  </ul>
  );
};

ChatLog.propTypes = {
  chatData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired  
  }))
};

export default ChatLog;