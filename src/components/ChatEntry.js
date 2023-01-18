import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import timeStamp from './TimeStamp.js';
import { messages } from './src/data';

const filledHeart = '❤️';
const emptyHeart = '🤍';

const ChatEntry = (props) => {
  const heartOrNot = props.liked ? filledHeart : emptyHeart;
  // const [pieceOfState, setPieceOfState] = useState('Initial value for pieceOfState.');

  return (
    <main>
      <div className="chat-entry local">
        <p className="entry-name"> {props.sender}</p>
        <p className="entry-bubble">{props.body}</p>
        <p className="chat-entry entry-time">{props.timeStamp}</p>
        <button className="button">{props.liked} </button>
      </div>
    </main>
  );
};

ChatEntry.propTypes = {
  message: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
};

export default ChatEntry;
