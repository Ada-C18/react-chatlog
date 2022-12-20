import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

// dynamic value with a function to update it using a bool 
  const [isLiked, setLiked] = useState(false); 

  const toggleLike = () => {
    setLiked(!isLiked);
  }; 
  
  return (
    <div className="chat-entry local">{props.id}
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button onClick={toggleLike} className="like">{isLiked ? '❤️' : '🤍' }</button>
      </section>
    </div>
  );
};
      
ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
};

export default ChatEntry;
