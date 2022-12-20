import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp, liked, id, onLike }) => {
  // const currentYear = new Date().getFullYear();
  // const yearOfMessage = new Date(timeStamp).getFullYear();
  // const howManyYearsAgo = currentYear - yearOfMessage;

  const likedHeart = liked ? '❤️' : '🤍';

  return (
    <div
      className={
        sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote'
      }
    >
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{<TimeStamp time={timeStamp}></TimeStamp>}</p>
        <button className="like" onClick={() => onLike(id)}>
          {likedHeart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ChatEntry;
