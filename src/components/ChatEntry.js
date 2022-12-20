import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = (props) => {
  const likeButton =() => {
    const updatedChatEntry = {
        id:props.id,
        sender:props.sender,
        body :props.body,
        timeStamp:props.timeStamp,
        liked:!props.liked,
        likeCount:props.likeMessage(props.id)
    };
    props.onUpdateChatData(updatedChatEntry);
  };

  const heart=props.liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{<TimeStamp time={props.timeStamp}/>}</p>
        <button className="like" onClick={likeButton}>{heart}</button>
        
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string. isRequired,
  timeStamp: PropTypes.string.isRequired,
  // not required for wave 1, but we're adding them anyways
  id: PropTypes.number.isRequired,
  liked:PropTypes.bool.isRequired,
  likeCount:PropTypes.number.isRequired,
  likeMessage:PropTypes.func.isRequired
};

export default ChatEntry;
