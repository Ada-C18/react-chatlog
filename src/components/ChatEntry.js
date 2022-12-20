import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import {useState} from 'react';


const ChatEntry = (props) => {
  const[liked, setLiked] = useState(false);
  const [likedCount, setLikeCount] = useState(0);

  const handleHeartChange = () => {
    
    // const updatedChat = {
    //   id: props.id,
    //   sender: props.sender,
    //   body: props.body,
    //   timeStamp: props.timeStamp,
    //   liked: props.liked,
    //   likedCount: likedCount

    // }
    setLikeCount(likedCount + 1)
    setLiked(!liked);
    // props.onUpdateChat(updatedChat);
    props.onAddLike(props.id);
   
  }
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button onClick ={handleHeartChange} className="like">{liked ?  '❤️' : '🤍' }</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool,
  // likedCount: PropTypes.number.isRequired,
  onAddLike: PropTypes.func.isRequired,
  onUpdateChat: PropTypes.func.isRequired

};

export default ChatEntry;
