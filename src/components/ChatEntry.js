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
      <div>
        <p className="entry-name"> {props.sender}</p>
        <p className="entry-bubble">{props.body}</p>
        <p className="chat-entry entry-time">{props.timeStamp}</p>
        <button className="button">{props.liked} </button>
      </div>
    </main>
  );
};

export default ChatEntry;

ChatEntry.propTypes = {
  message: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      handleLiked: PropTypes.func.isRequired,
      messageContent: PropTypes.number.isRequired,
    })
  ),
};

// const ChatEntry = (props) => {
//   const timeStamp = newDate.return(props.timeStamp)
//     <div>
//       <h2 className="sender">{props.sender}</h2>
//       <p className="body">{props.body}</p>
//       <p className="timeStamp">TIME STAMP</p>
//       {/* `sender`, `body`,  and `timeStamp` */}
//     </div>
//     <button onclick="myFunction()">Click me</button>
//   );
// };
