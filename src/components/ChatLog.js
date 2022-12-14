import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
// import chatMessages from './data/messages.json';

const ChatLog = (props) => {
  const msgComponents = props.entries.map((msg) => (
    <li key={msg.id}>
      {
        <ChatEntry
          sender={msg.sender}
          body={msg.body}
          timeStamp={msg.timeStamp}
        />
      }
    </li>
  ));
  return <div>{msgComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
