import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked }) => {
  // Date code
  const currentYear = new Date().getFullYear();
  const year = currentYear - new Date(timeStamp).getFullYear();
  // Left and right sender
  const localSender = 'Estragon';
  const senderLocalOrRemote =
    sender === localSender ? 'chat-entry local' : 'chat-entry remote';
  // Heart toggle
  const [likedState, setLikedState] = useState(liked);
  const likeIcon = likedState ? '❤️' : '🤍';
  const toggleLiked = () => {
    setLikedState(!likedState);
    const likedEvt = new CustomEvent('onLikeToggle', {
      detail: { liked: !likedState },
    });
    document.dispatchEvent(likedEvt);
  };

  return (
    <div className={senderLocalOrRemote}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{year} years ago</p>
        <button className="like" onClick={toggleLiked}>
          {likeIcon}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
