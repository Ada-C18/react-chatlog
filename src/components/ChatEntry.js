import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const likeFill = props.liked ? '❤️' : '🤍';
  const onLike = () => {
    props.updateLike(props.id);
  }
  const local = () =>{
    if (props.sender === 'Estragon'){
      return 'local'
    } else {
      return 'remote'
    }
  }
  return (
    <div className={`chat-entry ${local()}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={onLike}>{likeFill}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  updateLike: PropTypes.func.isRequired,
};

export default ChatEntry;
