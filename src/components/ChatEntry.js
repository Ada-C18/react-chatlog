import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const chatId = props.id
  const chatSender = props.sender
  const chatBody = props.body
  const chatTimeStamp = props.timeStamp
  const newDate = new Date()
  
  let diff = (newDate.getTime() - new Date(chatTimeStamp).getTime()) / 1000;
  diff /= (60*60*24);
  let currentYears = Math.abs(Math.round(diff/365.25))
  
  return (
    <div className="chat-entry local">
      <li key={chatId}>
      <h2 className="entry-name">{chatSender}</h2>
      <section className="entry-bubble">
        <p>{chatBody}</p>
        <p className="entry-time">{currentYears} years ago</p>
        <button className="like">🤍</button>
      </section>
    </li>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
