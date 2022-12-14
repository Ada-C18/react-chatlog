import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  const chatArray = props.chatData;

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{chatArray[0].sender}</h2>
      <section className="entry-bubble">
        <p>{chatArray[0].body}</p>
        <p className="entry-time">{chatArray[0].timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    sender:PropTypes.string.isRequired,
    body:PropTypes.string.isRequired,
    timeStamp:PropTypes.string.isRequired,
    liked:PropTypes.bool.isRequired
};

export default ChatEntry;
