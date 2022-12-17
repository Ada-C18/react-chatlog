import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const chatEntryComponents = entries.map((chatEntry) => {
    return (
      <ChatEntry
      id = { chatEntry.id }
      sender={ chatEntry.sender }
      body={ chatEntry.body }
      timeStamp={ chatEntry.timeStamp }
      />
    );
  });
  return (
    <div>
      {chatEntryComponents}
    </div>
  );  
}

ChatLog.propTypes = {
  ChatLog: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string
    })
  )
}

export default ChatLog