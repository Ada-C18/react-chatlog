import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = ({sender,body,timeStamp,updateLikes}) => {
  let senderClass = 'chat-entry local';
  if(sender === 'Estragon') {
    senderClass = 'chat-entry remote';
  }
  const [like, numLike] = useState(false);

  return (
    <div className={senderClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
          </p>
        {/* <TimeStamp className="entry-time" time={timeStamp} /> */}
        <button className="like" onClick={()=> updateLikes(like,numLike)}>
          {like ? '❤️': '🤍' }
        </button>
        {/* adding behavior to button ChatEntry */}
        {/* <button onclick={heartColorChange} className="like"> */}
          {/* {heart} */}
        {/* </button> */}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  // heartChange: PropTypes.bool.isRequired,
};

export default ChatEntry;
