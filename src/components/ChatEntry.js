import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { DateTime } from 'luxon';
import { useState } from 'react';

const ChatEntry = ({id,sender,body,timeStamp}) => {

  // //solution 1 based on sender
  // let changePos = 'chat-entry local';
  // if (sender==='Vladimir') {
  //   changePos = 'chat-entry remote';
  // }

  //solution 2 using ternary function to toogle left and right
  // const changePos = (sender==='Vladimir') ? 'local':'remote'}
  const [ liked, setToogle ] = useState(false);

  // if (liked){
  //   console.log('click');
  // } else {console.log('click click')};

  const clickHeart = () => {
    console.log('inside clickHeart function')
    setToogle(!liked);    
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
  sender: PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
};

export default ChatEntry;
