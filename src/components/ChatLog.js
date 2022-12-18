import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entryComps = [];
  for (const entry of props.entries) {
    console.log(`ENTRY:`, entry);
    entryComps.push(
      <>
        <ChatEntry
          // id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          // liked={entry.liked}
        ></ChatEntry>
      </>
    );
    // console.log(`BODY:`, { entry.body });
  }
  // console.log(`CHAT:`, { entryComps });
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
};

export default ChatLog;
