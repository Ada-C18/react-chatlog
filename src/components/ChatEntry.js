import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import timeStamp from './TimeStamp.js';
import { messages } from './src/data';

const filledHeart = '❤️';
const emptyHeart = '🤍';

const ChatEntry = (props) => {
  const heartOrNot = props.liked ? filledHeart : emptyHeart;

  return (
    <main>
      <div className={props.sender === 'Estragon' ? 'remote' : 'local'}>
        <p className="entry-name"> {props.sender}</p>
        <p className="entry-bubble">{props.body}</p>
        <p className="chat-entry entry-time">{props.timeStamp}</p>
        <button className="like" onClick={heartOrNot}></button>
      </div>
    </main>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
