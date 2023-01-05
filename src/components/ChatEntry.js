import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {

  const toggleLikeStatus = () => {
    // build out new (updated) entry
    const updatedMessage = {
      'id': props.id,
      'sender': props.sender,
      'body': props.body,
      'timeStamp': props.timeStamp,
      'liked': !props.liked,
    };
    // send new entry to App's update function to update 'chatLogs' state
    props.onLike(updatedMessage);
  };

  return (
    <div className={`chat-entry ${props.userType}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={toggleLikeStatus} >{(props.liked) ? '❤️' : '🤍'}</button>
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
  onLike: PropTypes.func.isRequired,
  userType: PropTypes.string.isRequired,
};

export default ChatEntry;
