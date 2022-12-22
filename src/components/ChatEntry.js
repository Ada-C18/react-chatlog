import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({id, sender, body, timeStamp, liked, updateIsLiked}) => {
  const entryClass = (id % 2 === 0) ? 'remote':'local';
  const hearts = liked ? '❤️': '🤍' ;
  
  return (
    <div className= { 'chat-entry' + ' ' + entryClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"> <TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={()=>updateIsLiked(id)}>{hearts}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id:PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
  updateIsLiked:PropTypes.func.isRequired,
};

export default ChatEntry;

// const [likeCount, setLikeCount] = useState(0);
// const updateIsLiked = () => { 
//   setLikeCount(likeCount+1);
// };
