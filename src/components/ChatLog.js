import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ chatLog }) => {
  const chatEntryComponents = chatLog.map((chatEntry) => {
    return (
      <ChatEntry
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