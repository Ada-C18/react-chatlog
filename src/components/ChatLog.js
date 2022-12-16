import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const allMessages = props.entries.map((messageData) => {
    return (
      <section key={messageData.id}>
        <ChatEntry
          sender={messageData.sender}
          body={messageData.body}
          timeStamp={messageData.timeStamp}
        ></ChatEntry>
      </section>
    );
  });

  return <section className="chat-log">{allMessages}</section>;
};

ChatLog.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
