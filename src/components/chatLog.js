import React from 'react';
// import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entries = props.entries;

  return (
    <ul className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          updateLikes={props.updateLikes}
        ></ChatEntry>
      ))}
    </ul>
  );
};

// ChatLog.propTypes = {
//   enteries: PropTypes.array,

export default ChatLog;
