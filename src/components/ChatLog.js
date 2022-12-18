import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';
// import TimeStamp from'./TimeStamp';

const ChatLog = (props) => {
  const getChatLogListJSX = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdateLikes={props.onUpdateLikes}
        onSetColorCallback= {props.onSetColorCallback}
      />

    );
  });
  return <ul>{getChatLogListJSX}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,
  onUpdateLikes: PropTypes.func.isRequired,
  onSetColorCallback: PropTypes.func.isRequired

  

};

export default ChatLog;
