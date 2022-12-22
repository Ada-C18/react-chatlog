import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {

  const likeHearts = props.liked ? '❤️' : '🤍'
  const msgOrientation = props.id % 2 == 0 ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={msgOrientation}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={() => props.toggleLike(props.id)} >{likeHearts}</button>
      </section>
    </div>
  );
};



ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
