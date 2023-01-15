import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const filledHeart = '❤️';
const emptyHeart = '🤍';

const ChatEntry = (props) => {
  const heartOrNot = props.liked ? filledHeart : emptyHeart;

  return (
    <main>
      <section>
        <h2>SENDER</h2>
        <p>MESSAGE TEXT</p>
        <p>TIME STAMP</p>
        <button className="likemessage"></button>
        onClick={(event) => props.handleLiked(props.id)}>
      </section>
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
