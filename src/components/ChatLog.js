import React from 'react';
import ChatEntry from './ChatEntry';


const ChatLog = (props) => {
  const formattedMessages = props.entries.map(entry => {

    //check if user is local or not
    const user = (entry.sender === props.localUser) ? 'local' : 'remote';

    return (
      <div key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLike={props.onLike}
          userType={user} />
      </div>
    )
  }
  );
  return (formattedMessages);
};

export default ChatLog;