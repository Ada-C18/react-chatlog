//import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import {useState} from 'react';


const ChatEntry = (props) => {
  const[likeButton,setLikeButton]=useState('🤍');
    const clickedToggle=()=>{

    if(likeButton==='🤍'){
      setLikeButton('❤️')
      props.updateLikes(true)
    }else{
      setLikeButton('🤍')
      props.updateLikes(false)
    }
  }
  
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">{props.body}
        <p></p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}/>
        </p>
        <button className="like" onClick={clickedToggle}>{likeButton}</button>
        
      </section>
    </div>
  );
};
//eventhandler (on click)====
//for
// const likeTotal(props)=>
//setlikeCount,Likecount)
//

ChatEntry.propTypes = {
  id:PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  likes:PropTypes.bool.isRequired,
  
};
//`ChatEntry` with props `sender`, `body`,  and `timeStamp`.

export default ChatEntry;
