import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

//chatMessages.reduce((a, obj) => {
//return a + obj.liked;
//}, 0),

const timeDifference = (posted) => {
  const difference = new Date(
    new Date().getTime() - new Date('2018-05-18T22:12:03Z').getTime()
  );
  if (difference.getFullYear() - 1970) {
    return `${difference.getFullYear() - 1970} years ago`;
  }
  return difference.getMonth() - 1
    ? `${difference.getMonth() - 1} months ago`
    : `${difference.getDate() - 1} days ago`;
};

const ChatEntry = ({ id, sender, body, timeStamp, liked, updateChatData }) => {
  const [isLiked, setLikes] = useState(liked);
  const likedOrNot = isLiked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeDifference(timeStamp)}</p>
        <button
          className="like"
          onClick={() => {
            updateChatData(id);
            setLikes(!isLiked);
          }}
        >
          {likedOrNot}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateChatData: PropTypes.func.isRequired,
};

export default ChatEntry;
