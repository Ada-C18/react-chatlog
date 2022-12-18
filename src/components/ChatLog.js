// should displayy a sequence of individual ChatEntry components

import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const ChatEntries = entries.map((entry) => {
    return (
      <div className="chat-log" key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        ></ChatEntry>
      </div>
    );
  });
  return <>{ChatEntries}</>;
};

export default ChatLog;
