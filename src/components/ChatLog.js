import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const updateLike = props.updateLike;
  const entryComps = [];
  for (const entry of props.entries) {
    entryComps.push(
      <div key={entry.id}>
        <ChatEntry
          className="chat-log"
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          updateLike={updateLike}
        ></ChatEntry>
      </div>
    );
  }
  return <>{entryComps}</>;
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  updateLike: PropTypes.func.isRequired,
};

export default ChatLog;
