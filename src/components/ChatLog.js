import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return props.entries.map((entry) => {
    return(
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      />
    )
});
}


ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape(
      {
        //Fill with correct proptypes
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        like: PropTypes.string,
  })
  ), 
};

export default ChatLog;