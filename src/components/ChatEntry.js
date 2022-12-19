import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = ({ sender, body, timeStamp, uniqueId }) => {
  const messageLocation = uniqueId % 2 ? 'chat-entry remote' : 'chat-entry local'
  return (
    <div className={messageLocation}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  uniqueId: PropTypes.number.isRequired
};

export default ChatEntry;
