import { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';



const ChatEntry = (props) => {
  
  // const updateLiked = () => {
  //   props.onUpdateLiked(props.liked);
  //   console.log('updated like!');
  // }
  const [isLiked,setLiked] = useState();
  const toggleLiked = ()=> {
    setLiked(!isLiked);
  }
  // const like = isLiked ? 'red' : 'blue';
  const heart = isLiked ? '❤️' : '🤍';

  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        {/* <li className={like}>why no change</li> */}
        <button className="like" onClick={toggleLiked}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
 /* onUpdateLiked: PropTypes.func,*/
};

export default ChatEntry;
