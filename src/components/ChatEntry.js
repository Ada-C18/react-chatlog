import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

// presentational


let likecount = 0;
function updateLikes(){
  likecount ++;
  document.getElementById('setlike').innerHTML=likecount;
  console.log(likecount)
};


const ChatEntry = ({id, sender, body, timeStamp, liked}) => {
  // console.log(id, sender, body )
  const time = <TimeStamp time={timeStamp} />; 
  const entryClass = (id % 2 === 0)  ? 'remote' : 'local' ;

  const [btntext, setButtonText] = useState('🤍')
    const changeHeart = () => {
      if (liked === false) {  
        liked = true; 
        setButtonText('❤️');
        updateLikes();
      }
      else {
        liked = false; 
        setButtonText('🤍');
        updateLikes();
      }
      console.log(liked)
    }

  return (
    <div className={' chat-entry ' + entryClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{time}</p>
        <button className="like" onClick={()=>{changeHeart();}} > {btntext} </button>
        
        
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.any.isRequired,
  liked:PropTypes.bool.isRequired
};

export default ChatEntry;
