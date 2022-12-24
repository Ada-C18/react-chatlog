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
            liked={chat.liked}
            onUpdateChat={props.onUpdateChat}
            key={chat.id}
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
      liked: PropTypes.bool,
    })
  ),
  onUpdateChat: PropTypes.func.isRequired,
};

export default ChatLog;
