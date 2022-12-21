import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = ({ id, sender, body, timeStamp, liked, likeMessage }) => {
  // EVERYTHING YOU'RE DOING BESIDES RENDERING GOES HERE! BEFORE RETURN!
  const heart = liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
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
