import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
// import chatMessages from '../data/messages.json';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <div className="chat-log">
      {props.chats.map((chat, i) => {
        return (
          <ChatEntry
            id={chat.id}
            sender={chat.sender}
            body={chat.body}
            timeStamp={chat.timeStamp}
            liked={chat.liked}
          />
        );
      })}
    </div>
  );
};

ChatLog.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  // updateLikes: PropTypes.func.isRequired,
};

export default ChatLog;
