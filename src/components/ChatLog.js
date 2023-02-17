import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatLogComponents = [];
  const chatLogList = props.chatLogList;

  for (const chat of chatLogList) {
    chatLogComponents.push(
      <ChatEntry
        key={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
      />
    );
  }

  return <div>{chatLogComponents}</div>;
};

ChatLog.propTypes = {
  chatLogList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
};

export default ChatLog;
