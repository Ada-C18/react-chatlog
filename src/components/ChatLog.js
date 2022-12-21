import React from 'react';
import ChatEntry from './ChatEntry';


const ChatLog = (props) => {
  const formattedMessages = props.entries.map(entry => {
    const user = (entry.sender === props.localUser) ? 'local' : 'remote';
    return (
      <div key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          userType={user} />
      </div>
    )
  }
  );
  return (formattedMessages);
};

export default ChatLog;