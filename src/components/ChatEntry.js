import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const [liked, setLiked] = useState('');

  // Calculate relative time stamp
  const timeStamp = new Date(props.timeStamp);
  const timeNow = new Date();
  const timeDifference = timeNow - timeStamp;
  let relativeTimeStamp;
  if (timeDifference < 31536000000) {
    relativeTimeStamp = `${Math.round(timeDifference / 86400000)} days ago`;
  } else {
    relativeTimeStamp = `${Math.round(timeDifference / 31536000000)} years ago`;
  }

  

  return (
    <div className={`${props.isLocal ? 'local' : 'remote'} chat-entry`} >    
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{relativeTimeStamp}</p>
        {/* // condition ? true : false */}
        <button
          className={liked ? 'like liked' : 'like'}
          onClick={() => {
            setLiked(!liked);
            props.likeHandler(!liked);
          }}
        >
          {liked ? '❤️' : '🤍'}
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
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
