import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};
//   const chat = props.messages.map((message) => {
//     return (
//       <div className="chat-entry local">
//         <h2 className="entry-name">{message.sender}</h2>
//         <section className="entry-bubble">
//           <p>{message.body}</p>
//           <p className="entry-time">{message.time}</p>
//           <button className="like">🤍</button>
//         </section>
//       </div>
//     );
//   });
//   return <div className="chat-entry">{chat}</div>;
// };

ChatEntry.propTypes = {
  // id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  // liked: PropTypes.number.isRequired,
};

export default ChatEntry;
