import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  const message = {
    id: props.message.id,
    sender: props.message.sender,
    body: props.message.body,
    timeStamp: props.message.timeStamp,
    // liked: false
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{message.sender}</h2>
      <section className="entry-bubble">
        <p>{message.body}</p>
        <p className="entry-time">{message.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

// ChatEntry.propTypes = {
//   //Fill with correct proptypes
// };

export default ChatEntry;
