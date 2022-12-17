import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const allEntries = props.messages.map((message) => {
    return (
      <ChatEntry
        id={message.id}
        key={message.id}
        body={message.body}
        sender={message.sender}
        timeStamp={message.timeStamp}
        liked={message.liked}
        updateMessage={
        props.updateMessage
        }
      ></ChatEntry>
    );
  });
  // return requires an argument
  return <div>{allEntries}</div>;
};
ChatLog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateMessage: PropTypes.func.isRequired,
};

export default ChatLog;
