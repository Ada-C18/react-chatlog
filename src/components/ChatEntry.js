import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const time = <TimeStamp 
                  time={props.timeStamp}>
                </TimeStamp>


  return (
    <div className={props.sender==='Vladimir'? 'chat-entry local': 'chat-entry remote' } >
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={() =>props.onSetColorCallback}>{props.body}</p>
        <p className="entry-time">{time}</p>
        <button  className="like" onClick={() => props.onUpdateLikes(props.id)} >🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateLikes: PropTypes.func.isRequired,
  onSetColorCallback: PropTypes.func.isRequired


};

export default ChatEntry;
