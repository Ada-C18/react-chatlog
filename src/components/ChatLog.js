import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return (
    <ul className="ChatLog">
      {props.entries.map((entry) => {
        return (
          <ChatEntry
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            onUpdateMessage={props.onUpdateMessage}
            key={entry.id}
          />
        );
      })}
      ;
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  onUpdateMessage: PropTypes.func,
};

export default ChatLog;
