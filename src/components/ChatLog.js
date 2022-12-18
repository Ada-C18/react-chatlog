import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
// import chatMessages from './data/messages.json';

const ChatLog = (props) => {
  return (
    <>
      <h2>Chat between Vladimir and Estragon</h2>
      <h3>Number of Likes</h3>
      <ul>
        {props.entries.map((chat) => (
          <ChatEntry
            sender={chat.sender}
            body={chat.body}
            timeStamp={chat.timeStamp}
            // key={chat.id}
            // id={chat.id}
          />
        ))}
      </ul>
    </>
  );
};

ChatLog.propTypes = {
  chatLog: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
};

export default ChatLog;
