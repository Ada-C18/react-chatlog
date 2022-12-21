import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';


const ChatEntry = ({sender, body, id, timeStamp, liked, updateChatData}) => {
  const user ='Vladimir';
  const [like, setLike] = useState(liked);
  const userBubble = sender===user ? 'chat-entry local': 'chat-entry remote'

  const handleLike = () => {
      setLike(isLiked => {
        const newState= !isLiked;
        updateChatData(newState, id);
        return newState;
      })
    };

  const heart = like ? '❤️' : '🤍';
  
  

  return (
    <div className={`${userBubble}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/> </p>
        <button onClick={handleLike} className="like">{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateChatData: PropTypes.func.isRequired
};

export default ChatEntry;
