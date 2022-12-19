import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateLikedEntry }) => {
  const chatEntryComponents = entries.map((chatEntry) => {
    return (
      <ChatEntry
      key={ chatEntry.id }
      id = { chatEntry.id }
      sender={ chatEntry.sender }
      body={ chatEntry.body }
      timeStamp={ chatEntry.timeStamp }
      liked={ chatEntry.liked }
      updateLikedEntry={ updateLikedEntry }
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
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool
    })
  ),
  updateLikedEntry: PropTypes.func
}

export default ChatLog