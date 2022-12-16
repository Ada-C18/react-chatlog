import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id,sender,body,timeStamp,liked, toggleLike}) => {
  let local = 'chat-entry remote'
  if (id%2) {
    local='chat-entry local'
  }

  // (❤️) to an empty heart (🤍
  const toggleHeart = () => {
    return toggleLike(id)
  }
  const likeDict = {
    false:'🤍',
    true:'❤️'
  }
  return (
    <div className={local} key={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={toggleHeart}>{likeDict[liked]}</button>
      </section>
      <span>{liked}</span>
    </div>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string
};

export default ChatEntry;
