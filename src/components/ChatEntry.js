import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

// import React from 'react';
// import './ChatEntry.css';
// import PropTypes from 'prop-types';
// import timeStamp from './TimeStamp.js';
// import { messages } from '../data/messages.json';

const filledHeart = '❤️';
const emptyHeart = '🤍';

const ChatEntry = (props) => {
  const heartOrNot = props.liked ? filledHeart : emptyHeart;

  return (
    <div className="chat-entry">
      {props.sender === 'Estragon' ? 'remote' : 'local'}
      <h2 className="entry-name"> {props.sender}</h2>
      <section className="chat-entry entry-bubble">
        .<p className="chat-entry ">{props.body}</p>.
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like" onClick={heartOrNot}></button>
      </section>
    </div>
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
