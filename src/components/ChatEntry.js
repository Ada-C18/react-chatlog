import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const chat = {
    id: props.id,
    sender: props.sender,
    body: props.body,
    timeStamp: props.timeStamp,
    // liked: false
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{chat.sender}</h2>
      <section className="entry-bubble">
        <p>{chat.body}</p>
        <p className="entry-time"><TimeStamp time = {chat.timeStamp}></TimeStamp></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string
  // message: PropTypes.shape(
  //   {
  //   // {id: PropTypes.number.isRequired, 
  //   sender: PropTypes.string.isRequired,
  //   body: PropTypes.string.isRequired,
  //   timeStamp: PropTypes.string.isRequired
  //   }
  // )
};

export default ChatEntry;
