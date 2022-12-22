import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const ChatEntry = (props) => {
  const id = props.id;
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const liked = props.liked;
  const updateLikes = props.updateLikes;

  let time = new Date(timeStamp);
  let difference = 2022 - time.getFullYear();

  const buttonClass = liked ? '❤️' : '🤍';

  if (id % 2 === 0) {
    return (
      <div className="chat-entry remote">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{difference} years ago</p>
          <button
            className="like"
            onClick={() => {
              updateLikes(id);
            }}
          >
            {buttonClass}
          </button>
        </section>
      </div>
    );
  } else {
    return (
      <div className="chat-entry local">
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{difference} years ago</p>
          <button
            className="like"
            onClick={() => {
              updateLikes(id);
            }}
          >
            {buttonClass}
          </button>
        </section>
      </div>
    );
  }
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
