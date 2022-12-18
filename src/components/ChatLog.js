import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <ul>
        {props.entries.map((entry)=> (
            <ChatEntry
                sender = {entry.sender}
                body = {entry.body}
                timeStamp = {entry.timeStamp}
                key = {entry.id}
                id = {entry.id}
            />
        ))}
    </ul>
  );
};

ChatLog.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }))
};

export default ChatLog;