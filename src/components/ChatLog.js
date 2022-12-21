import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chats = props.entries.map((entry, i) => {
    return (
      <ChatEntry
        key={i}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLike={props.updateLike}
      />
    );
  });
  return (
    <div>
      <div>{chats}</div>
    </div>
  );
};

export default ChatLog;
