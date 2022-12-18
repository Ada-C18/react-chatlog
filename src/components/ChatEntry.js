import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // const messagesList = props.messagesList;
  // const id = messagesList[0].id;
  // const sender = messagesList[0].sender;
  // const body = messagesList[0].body;
  // const timeStamp = messagesList[0].timeStamp;
  // const liked = messagesList[0].liked;
  // const messageComps

  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

// ChatEntry.propTypes = {
//   messagesList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       sender: PropTypes.string.isRequired,
//       body: PropTypes.string.isRequired,
//       timeStamp: PropTypes.string.isRequired,
//       liked: PropTypes.bool.isRequired,
// })
//   );
// };

export default ChatEntry;
