import React from 'react';
import './ChatEntry.css';
import { useState } from 'react';

import PropTypes from 'prop-types';
// import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [toggleLike, setToggleLike] = useState('false');

  const toggle= () => {
    setToggleLike(!toggleLike);
    console.log(toggleLike);
  }
  
  // props.key => value
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">Sender Name: {props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">This is the time slot{props.time}</p>
        <button className="like" >🤍 </button>
      </section>
    </div>
  );
};



ChatEntry.propTypes = {
    //Fill with correct proptypes
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
};

export default ChatEntry;
