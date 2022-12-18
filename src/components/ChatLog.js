import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const chatLog = ({entries}) => {
  const chatlogMessages = entries.map((chat) => {
    return (
      <div className="">
        <ChatEntry 
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
      />
      </div>
    );
    });
    return chatlogMessages
    };

export default chatLog;