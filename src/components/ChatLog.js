import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
// import chatMessages from './data/messages.json';
// import TimeStamp from './TimeStamp.js';

const ChatLog = (props) => {
  // const componentClass = 'chat-log';
  // const chatEntries = ChatEntry.map((entries) => {
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
// return <section>{chatEntries}</section>;
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
