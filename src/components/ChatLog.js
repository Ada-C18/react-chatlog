import React from 'react';
import PropTypes from 'prop-types';

import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
// const ChatLog = (props) => {
//   const entries = props.entries;
  const messageComponents = [];

  for (const message of entries) {
    messageComponents.push(
      <ChatEntry
        // id={message.chatId}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
      />
    );
  }

  return <div>{messageComponents}</div>;
}

ChatEntry.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.arrayOf(
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
