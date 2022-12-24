import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [likesCount, setLikesCount] = useState(0);
  const increaseLikes = () => {
    setLikesCount(likesCount + 1);
  };

  // const chatData = [
  //   {
  //     id: 1,
  //     sender: 'Vladimir',
  //     body: 'why are you arguing with me',
  //     timeStamp: '2018-05-29T22:49:06+00:00',
  //     liked: false,
  //   },
  // ];
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>
          {props.body} {likesCount}
        </p>
        <p className="entry-time">{props.timeStamp}</p>
        <button onClick={increaseLikes} className="like">
          🤍
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
