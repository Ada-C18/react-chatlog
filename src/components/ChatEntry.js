import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const heart = props.liked ? '❤️' : '🤍';
  return (
    <div className={props.sender==='Vladimir'? 'chat-entry local': 'chat-entry remote' } >
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={() => props.onLiked(props.id)}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLiked: PropTypes.func.isRequired,
  timeStamp: PropTypes.any.isRequired

};

export default ChatEntry;
