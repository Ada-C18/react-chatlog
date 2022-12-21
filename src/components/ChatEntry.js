import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, setToggleLike }) => {
  const currentYear = new Date().getFullYear();
  const year = currentYear - new Date(timeStamp).getFullYear();
  const currentLike = liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{year} years ago</p>
        <button className="like" onClick={() => setToggleLike(id, !liked)}>
          {currentLike}
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
  setToggleLike: PropTypes.func,
};

export default ChatEntry;
