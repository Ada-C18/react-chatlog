import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';
// import chatMessages from './data/messages.json';

const ChatLog = (props) => {
  const msgComponents = [];
  let keyCounter = 0;
  for (const msg of props.entries) {
    msgComponents.push(
      <li key={keyCounter}>
        {
          <ChatEntry
            id={msg.id}
            sender={msg.sender}
            body={msg.body}
            timeStamp={msg.timeStamp}
            liked={msg.liked}
            toggleLike={props.toggleLike}
          />
        }
        ;
      </li>
    );
    keyCounter += 1;
  }
  return <div className="chat-log">{msgComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  toggleLike: PropTypes.func,
};

export default ChatLog;
