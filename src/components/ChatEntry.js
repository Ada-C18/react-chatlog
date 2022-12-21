import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const handleHeartChange = () => {
    
    const updatedChat = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked

    };
  
    props.onUpdateChat(updatedChat);
  };

  const heart = props.liked ?  '❤️' : '🤍';
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button onClick ={handleHeartChange} className="like">{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired

};

export default ChatEntry;
