import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender,body, timeStamp,liked, updateLikes}) => {
  const myHeart = liked ? '❤️': '🤍' ;
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={() => updateLikes(id)}>
          {myHeart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  updateLikes:PropTypes.func
};

export default ChatEntry;
