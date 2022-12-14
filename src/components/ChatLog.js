import React from 'react';
import './ChatLog.css';
// import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const chatComponents = entries.map((entry) => {
    return (
      <div key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        ></ChatEntry>
      </div>
    );
  });

  return <section className="chat-log">{chatComponents}</section>;
};

export default ChatLog;
