import React from 'react';
import {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = ({id, sender, body, timeStamp, liked, updateLiked}) => {
  const newDate = new Date()
  
  let diff = (newDate.getTime() - new Date(timeStamp).getTime()) / 1000;
  diff /= (60*60*24);
  let currentYears = Math.abs(Math.round(diff/365.25))
  
  const [buttonText, setButtonText] = useState('🤍')

  const toggleLiked = (id, likedStatus) => {
    console.log(`${likedStatus}`);
    if (likedStatus === true){
      setButtonText('❤️')
    } else {
      setButtonText('🤍')
    }
    updateLiked(id, likedStatus);
  };
  if (Number(id)%2){
    return (
      <div className="chat-entry local">
      <li key={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{currentYears} years ago</p>
        <button className="like" onClick={()=> toggleLiked(id, !liked)}>{buttonText}</button>
      </section>
    </li>
    </div>
    )
  } else {
    return(
      <div className="chat-entry remote">
        <li key={id}>
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">{currentYears} years ago</p>
          <button className="like" onClick={()=> toggleLiked(id, !liked)}>{buttonText}</button>
        </section>
      </li>
      </div>
    )
  }
  // return (
  //   <div className="chat-entry local">
  //     <li key={id}>
  //     <h2 className="entry-name">{sender}</h2>
  //     <section className="entry-bubble">
  //       <p>{body}</p>
  //       <p className="entry-time">{currentYears} years ago</p>
  //       <button className="like" onClick={()=> toggleLiked(id, !liked)}>{buttonText}</button>
  //     </section>
  //   </li>
  //   </div>
  // );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  updateLiked: PropTypes.func.isRequired
};

export default ChatEntry;
