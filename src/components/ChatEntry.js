import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const id = props.id
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const liked = props.liked
  const updateChatLog = props.updateChatLog


  const determineSender = (sender) => {
    if (sender === 'Vladimir'){
      const senderType = true;
      return (senderType ? 'remote': 'local');
    } else {
        const senderType = false
        return (senderType ? 'remote': 'local')}}

  const displayHeart = (liked) => {
    return (liked ? '❤️' : '🤍');
  }
  const updateHeartColor = (liked) => {
    if (liked === false){
      updateChatLog(id, true)
    } else {
      updateChatLog(id, false)
    }
  }

  return (
    <div className={`chat-entry ${determineSender(sender)}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStamp}</p>
        <button className="like"  onClick={() => updateHeartColor(liked)}>{displayHeart(liked)}</button>
      </section>
    </div>
  );
};



ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  updateChatLog:PropTypes.func.isRequired
};

export default ChatEntry;
