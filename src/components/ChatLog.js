import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';
// import chatMessages from './data/messages.json';

const ChatLog = (props) => {
  const msgComponents = props.entries.map((msg) => (
    <li key={msg.id}>
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
    </li>
  ));
  return <div className="chat-log">{msgComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default ChatLog;
