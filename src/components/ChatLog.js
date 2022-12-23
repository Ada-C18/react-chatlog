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
            sender={chat.sender}
            body={chat.body}
            timeStamp={chat.timeStamp}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChatLog;
