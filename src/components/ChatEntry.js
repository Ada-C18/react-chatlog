import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  const [liked, setLiked] = useState(props.likedCounts);

  // Calculate relative time stamp
  const timeStamp = new Date(props.timeStamp);
  const timeNow = new Date();
  const timeDifference = timeNow - timeStamp;
  let relativeTimeStamp;

  // if (timeDifference < 60000) {
  //   relativeTimeStamp = `${Math.round(timeDifference / 1000)} seconds ago`;
  // } else if (timeDifference < 3600000) {
  //   relativeTimeStamp = `${Math.round(timeDifference / 60000)} minutes ago`;
  // } else if (timeDifference < 86400000) {
  //   relativeTimeStamp = `${Math.round(timeDifference / 3600000)} hours ago`;
  // } else if 
  if (timeDifference < 31536000000) {
    relativeTimeStamp = `${Math.round(timeDifference / 86400000)} days ago`;
  } else {
    relativeTimeStamp = `${Math.round(timeDifference / 31536000000)} years ago`;
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{relativeTimeStamp}</p>
        <button
          className={liked ? 'like liked' : 'like'}
          onClick={() => setLiked(!liked)}>
          {liked ? '💓' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct prop types
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.instanceOf(Date).isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
