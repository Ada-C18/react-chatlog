import React, {useState} from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';


const ChatEntry = (props) => {

  
  //This line of code is using the ternary operator to set the value 
  //of the likeFill constant. If props.liked is true, 
  //then likeFill will be set to '❤️'. If props.liked is false, 
  //then likeFill will be set to '🤍'. The likeFill constant will be 
  //used later in the code to display either a red heart or a white
  // heart emoji, depending on whether the item has been liked or not.
  
  // const onLike = () => {
  //   props.updateLike(props.id);
  // }
  
  const [isLiked, setIsLiked] = useState(false);

  // const likeFill = isLiked ? '❤️' : '🤍';

  const likeFill = props.isLiked ? '❤️' : '🤍';

  const onLike = () => {
    props.updateLike(props.id); 
    setIsLiked(!isLiked);
  }

  // This line of code is defining a function called onLike. When this function 
  //is called, it will call the updateLike function, passing in the props.id as an argument.
  // The updateLike function is likely a function that updates the like status of the item with the given id.
  // The onLike function will be used later in the code as an event handler for a button or some other UI element 
  //that allows the user to like or unlike an item.

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        {/* <button className="like">🤍</button> */}
        <button className="like" onClick={onLike} >
          {likeFill}
        </button>
    
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired,
};

export default ChatEntry;
