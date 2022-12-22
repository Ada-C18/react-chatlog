import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entries = props.entries;
  return (
    <div>
      {entries.map((message) => (
        <ChatEntry
          id={message.id}
          key={message.id}
          body={message.body}
          sender={message.sender}
          timeStamp={message.timeStamp}
          liked={message.liked}
          updateMessage={props.updateMessage}
        ></ChatEntry>
      ))}
      ;
    </div>
  );
};
// return requires an argument
// return <div>{entries}</div>;

ChatLog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateMessage: PropTypes.func.isRequired,
};

export default ChatLog;
