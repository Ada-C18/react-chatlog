import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const filledHeart = '🐣'; //Design choice: using eggs and chicks!
const emptyHeart = '🥚';
const user = 'Vladimir'; //You can choose between Vladimir and Estragon to switch sides

const ChatEntry = (props) => {
  const heartType = props.liked ? filledHeart : emptyHeart;
  const buttonClass =
    props.sender === user ? 'chat-entry local' : 'chat-entry remote';

  const timeSince = (dateAsString) => {
    const originalTime = new Date(dateAsString);
    const currentTime = Date.now();
    const diffTime = Math.abs(originalTime - currentTime);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    return `${diffYears.toString()} years ago`;
  };

  const timeToBeDisplayed = timeSince(props.timeStamp);
  return (
    <div className={`${buttonClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{timeToBeDisplayed}</p>

        <button className="like" onClick={() => props.onLikeMessage(props.id)}>
          {heartType}
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
  liked: PropTypes.bool,
};

export default ChatEntry;
