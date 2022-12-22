import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
// import { useState } from 'react';

const ChatEntry = (props) =>
{
  // "id": 25,
  // "sender":"Vladimir",
  // "body":"but you just said that you are robots",
  // "timeStamp":"2018-05-29T23:15:47+00:00",
  // "liked": false
  
  const chatId = props.id;
  const liked = props.liked;
  const chatSender = props.sender;
  const chatBody = props.body;
  const chatTimeStamp = props.timeStamp;
  const updateHeartStatus = props.updateHeartStatus;

  const likeButton = liked ? '❤️' : '🤍';
  
  const rightLeft = () => {
    if (chatSender === 'Vladimir'){
      return 'local';
    }else{
      return 'remote';
    }
  };

  return (
    <div className={`chat-entry ${rightLeft()}`}>
      {/* Variables inside strings need a dollar sign and curly brace as a delimiter: */}
      <h2 className="entry-name">{chatSender}</h2>
      <section className="entry-bubble">
        <p>{chatBody}</p>
        <p className="entry-time">
          <TimeStamp time={chatTimeStamp} />
        </p>
        <button className="like" onClick={() => updateHeartStatus(chatId, !liked)}>{likeButton}</button>
       
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateHeartStatus: PropTypes.func.isRequired,
 
};


export default ChatEntry;
