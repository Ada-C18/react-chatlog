import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = ({ id, sender, body, timeStamp, liked, likeMessage }) => {
  const heart = liked ? '❤️' : '🤍';
  const chatEntryType = sender === 'Estragon' ? 'remote' : 'local';

  return (
    <div className={`chat-entry ${chatEntryType}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <TimeStamp className="entry-time" timeStamp={timeStamp} />
        <button className="like" onClick={() => likeMessage(id)}>
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
