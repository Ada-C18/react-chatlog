import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const messages = props.chatMessages.map((message, i) => {
    return <chatMessages
    key={i}
    sender={message.sender}
    body={message.body}
    timeStamp={message.timeStamp}
    liked={message.liked}
    />
  })
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">name: {props.sender}</h2>
      <section className="entry-bubble">
        <p>message: {props.body}</p>
        <p className="entry-time">time: {props.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
