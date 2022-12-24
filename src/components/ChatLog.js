import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = (props) => {
  return (
    <div className="chat-log">
      <ul>
        {props.entries.map((chat) => (
          <ChatEntry
            id={chat.id}
            sender={chat.sender}
            body={chat.body}
            timeStamp={chat.timeStamp}
            isLiked={chat.isLiked}
            onUpdate={props.onUpdateChat}
          />
        ))}
      </ul>
    </div>
  );
};

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      isLiked: PropTypes.bool,
    })
  ),
  onUpdateChat: PropTypes.func.isRequired,
};

export default ChatLog;
