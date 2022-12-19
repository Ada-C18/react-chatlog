import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = [];
  const chatLogs = props.entries;
  const updateLikes = props.updateLikes;

  for (const entry of chatLogs) {
    chatEntryComponents.push(
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLikes={updateLikes}
      />
    );
  }

  return <div>{chatEntryComponents}</div>;
};

export default ChatLog;
