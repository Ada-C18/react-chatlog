import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => (
    <ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      toggleLiked={props.onToggleLiked}
      userColors={props.colors}
    />
  ));

  return <section className="chat-log">{chatComponents}</section>;
};

export default ChatLog;
