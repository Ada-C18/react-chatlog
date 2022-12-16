import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { DateTime } from 'luxon';
// import { useState } from 'react';

const ChatEntry = ({id,sender,body,timeStamp, liked,updateLikes}) => {

  // //solution 1 based on sender
  // let changePos = 'chat-entry local';
  // if (sender==='Vladimir') {
  //   changePos = 'chat-entry remote';
  // }

  //solution 2 using ternary function to toogle left and right
  // const changePos = (sender==='Vladimir') ? 'local':'remote'}
  // const [ liked, setToogle ] = useState(false);


  const clickHeart = () => {
    console.log('inside function clickHeart from ChatEntry.js ')
    // setToogle(!liked);
    updateLikes({
      id:id,
      sender:sender,
      body:body,
      liked:!liked
    });    
  }

  //if liked is true then red heart, else grey heart
  const emojiChange = liked ? '❤️':'🤍' ;

  return (
    <div className={`chat-entry ${sender==='Vladimir' ? 'local':'remote'}`}>     
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p >{body}</p>
        <p className="entry-time">
        <TimeStamp time={timeStamp} />
        </p>
         <button onClick={ clickHeart } >{emojiChange}</button> 
         {/* <button onClick={ setHeart }>🤍</button>  */}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id:PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
  updateLikes:PropTypes.func.isRequired,
};

export default ChatEntry;
