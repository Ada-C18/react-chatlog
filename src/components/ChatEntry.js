import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';
import { useState } from 'react';

const ChatEntry = (props) => {
  const sender = props.sender;
  const senderBody = props.body;
  const timeStamp = props.timeStamp;
  const [isLiked, setIsLiked] = useState(false);

  const changeColorHeart = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{senderBody}</p>
        <div className="entry-time">
          <TimeStamp time={timeStamp} />
        </div>

        <button className="like" onClick={changeColorHeart}>
          {isLiked ? <div>❤️</div> : <div>🤍</div>}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
