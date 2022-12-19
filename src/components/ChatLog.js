import PropTypes from 'prop-types';
import React from 'react';
import ChatEntry from './ChatEntry';

import './ChatLog.css';

const ChatLog = ({ entries }) => {
  const chatComponents = [];

  for (const chat of entries) {
    console.log('chat', chat);
    chatComponents.push(
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
      />
    );
  }

  return <div>{chatComponents}</div>;
};
ChatLog.propTypes = {
  ChatLog: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      Sender: PropTypes.string.isRequired,
      Body: PropTypes.string.isRequired,
      TimeStamp: PropTypes.string.isRequired,
      // liked: PropTypes.bool.isRequired,
    })
  ),
};

export default ChatLog;
