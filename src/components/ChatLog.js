import React from 'react';
import ChatEntry from './ChatEntry.js';

const ChatLog = ({ entries }) => {
  const chatLogComponents = entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      </li>
    );
  });
  return [chatLogComponents];
};

export default ChatLog;
