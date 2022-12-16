import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.chat.sender}</h2>
      <section className="entry-bubble">
        <p>{props.chat.body}</p>
        <p className="entry-time">{props.chat.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string
};

export default ChatEntry;
