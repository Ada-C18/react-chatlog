import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries}) => {
  const chatEntryComponents = entries.map(entry => {
    return (
    <ChatEntry id={entry.id} sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp}></ChatEntry>
    );
  });
  return (
  <div className='chat-log'>{chatEntryComponents}</div>
  );
};

export default ChatLog;