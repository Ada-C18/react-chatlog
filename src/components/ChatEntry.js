import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ entry, onLike }) => {
  const onLikeButtonClick = () => {
    const updatedChatEntry = {
      id: entry.id,
      sender: entry.sender,
      body: entry.body,
      timeStamp: entry.timeStamp,
      liked: !entry.liked,
    };
    onLike(updatedChatEntry);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{entry.sender} </h2>
      <section className="entry-bubble">
        <p>{entry.body}</p>
        <p className="entry-time">
          <TimeStamp dataTime={entry.timeStamp} />
        </p>
        <button className="like" onClick={onLikeButtonClick}>
          {entry.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

// propTypes
ChatEntry.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool,
  }),
};

export default ChatEntry;
