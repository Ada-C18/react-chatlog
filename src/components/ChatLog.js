import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, onUpdateChatEntry}) => {
  const chatEntryComponents = entries.map(entry => {
    return (
    <ChatEntry 
      id={entry.id} 
      sender={entry.sender} 
      body={entry.body} 
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      onLiked={onUpdateChatEntry}>
    </ChatEntry>
    );
  });

  return (
  <div className='chat-log'>{chatEntryComponents}</div>
  );
};

ChatLog.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool
    })
  ).isRequired,
  onUpdateChatEntry: PropTypes.func.isRequired
};

export default ChatLog;