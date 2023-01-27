import React from 'react';
import './Chatlog.css';
import ChatEntry from './ChatEntry';

const map_chats = (entries) => {
  return entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });
};

const ChatLog = ({ entries }) => {
  return <article className="chat-log">{map_chats(entries)}</article>;
};

export default ChatLog;
