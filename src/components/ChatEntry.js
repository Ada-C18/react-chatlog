import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import {useState} from 'react'

const ChatEntry = ({id,sender,body,timeStamp,liked, toggleLike}) => {
  let local = 'chat-entry remote'
  if (id%2) {
    local='chat-entry local'
  }

  // (❤️) to an empty heart (🤍

  // const [likeStatus, setLike] = useState(liked);
  // const toggleLike = () => {
  //   setLike(!likeStatus)
  //   console.log(likeStatus)
  // }
  const toggleHeart = () => {
    return toggleLike(id)
  }
  const likeDict = {
    false:'🤍',
    true:'❤️'
  }
  // function likeDisplay() {
  //   if (liked===true){
  //   return '❤️'
  // } else {
  //   return '🤍'
  // }}
  console.log(liked)
  return (
    <div className={local}>
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
