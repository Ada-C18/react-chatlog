import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


// presentational

const ChatEntry = ({id, sender, body, timeStamp, liked, updateHeartLikes}) => {
  const time = <TimeStamp time={timeStamp} />; 
  const entryClass = (id % 2 === 0)  ? 'remote' : 'local' ;

    return (
    <div className={' chat-entry ' + entryClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{time}</p>
        <button className="like" onClick={()=>{updateHeartLikes(id)}} >{liked ? '❤️' :'🤍'}</button>

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
