import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = [];
  const chatLogs = props.entries;

  for (const entry of chatLogs) {
    chatEntryComponents.push(
      <ChatEntry
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      />
    );
  }

  return <div>{chatEntryComponents}</div>;
};

export default ChatLog;
