import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';



const ChatEntry = ({sender, body, timeStamp}) => {
//  const chatlogMessages = chatMessages.map((chat) => {

  return (
    <div className="chat-entry local">
      <h2 className="entry-name"> {sender} </h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"> <TimeStamp time={timeStamp}/> </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
 };
// return chatlogMessages
// };

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
