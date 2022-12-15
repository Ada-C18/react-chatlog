import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const firstChat = props.chatMessages[0];

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{firstChat.sender}</h2>
      <section className="entry-bubble">
        <p>{firstChat.body}</p>
        <p className="entry-time">{firstChat.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.instanceOf(Date).isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
