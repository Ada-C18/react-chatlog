import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
// import chatMessages from './data/messages.json';

const ChatLog = (props) => {
  if (props.entries.length === 0) {
    const chatLog = props.entries;
    return <section>{chatLog}</section>;
  }

  const firstSender = props.entries[0].sender;
  const chatLog = props.entries.map((message) => {
    return (
      <div key={message.id}>
        <ChatEntry
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          firstSender={firstSender}
        ></ChatEntry>
      </div>
    );
  });

  return <section>{chatLog}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
};
export default ChatLog;
