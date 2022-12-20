import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './components/ChatEntry.js';

// import TimeStamp from './TimeStamp.js';
// import chatMessages from './data/messages.json';

const ChatLog = (props) => {
  const chatEntries = ChatEntry.map(chatMessage);
  return (
    <ul className="ChatLog">
      {props.entries.map((entry, i) => {
        return (
          <ChatEntry
            id={entry.id}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            key={entry.id}
          />
        );
      })}
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
    })
  ),
};

export default ChatLog;
