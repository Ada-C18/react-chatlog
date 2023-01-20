import React, { useEffect, useState } from 'react';
import ChatEntry from '../components/ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatLog = props.entries.map((entry, index) => {
    return (
      <ol key={index}>
        <ChatEntry
          entry={entry}
        ></ChatEntry>
      </ol> 
      )
    });
  return (
    chatLog
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    body: PropTypes.string,
    timeStamp: PropTypes.string,
    // liked: PropTypes.bool
  })),
};

export default ChatLog;