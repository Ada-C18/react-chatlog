import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
// import chatMessages from './data/messages.json';
// import TimeStamp from './TimeStamp.js';

const ChatLog = (props) => {
  const componentClass = 'chat-log';
  // const chatEntries = ChatEntry.map(chatMessage);
  // const chatEntries = ChatEntry.map((entries) => {
  return (
    // <ul className="ChatLog">
    <ul className="ChatLog">
      {props.entries.map((entry) => {
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
      ;
    </ul>
  );
};

// return (
//   <article>
//     <ul>
//       {/* className={componentClass} */}
//       {chatEntries}
//     </ul>
//   </article>
// );

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
