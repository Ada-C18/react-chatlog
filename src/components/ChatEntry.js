import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'
// import { useState } from 'react';

const ChatEntry = ({ sender, body, timeStamp, uniqueId, liked, updateLikes}) => {
  const messageLocation = uniqueId % 2 ? 'chat-entry remote' : 'chat-entry local';

  // const [toggle, setToggle] = useState(liked);
  // console.log(liked)
  const toggleHeart = () => {
    updateLikes(uniqueId)
    // console.log('toggle time')
    // setToggle(!toggle);
  };
  const heartFill = liked ? '❤️' : '🤍';
  
  // adding State & event Handling
  // create a piece of state to hold whether the message is "liked"
  //    const [isLiked, setIsLiked] = useState(false);
  // create a toggle feature to the button element
  // 
  // write a conditional based on if isLiked is True or false
  // ?? How to reference/access the "heart" ??
  //  if true --> '❤️' 
  //  if false --> '🤍'
  // create an event handler that updates state whenever the button is clicked
    //  const toggleHeart = () => {
    //   setIsLiked(!isLiked);
    //  };
  // attach the event handler to the Button
  // onClick={toggleHeart}

  return (
    <div className={messageLocation}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button onClick={toggleHeart} className="like">{heartFill}</button>
        {/* <button className="liked">{heartFill}</button> */}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  uniqueId: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLikes: PropTypes.func
};

export default ChatEntry;
