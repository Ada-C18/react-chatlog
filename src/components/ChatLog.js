import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry, index) => {
    return (
      <ul key={index}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          id={entry.id}
          timeStamp={entry.timeStamp}
          ulked={entry.liked}
        />
      </ul>
    );
  });

  return <section>{chatEntries}</section>;
};

export default ChatLog;
