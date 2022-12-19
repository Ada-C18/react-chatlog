import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const likeClass = props.liked ? '❤️' : '🤍';
  // logic to assign 'local' or 'remote' to each sender:
  // if (props.sender === 'Vladimir') {
  //   className = 'local';
  //   } else {
  //     className = 'remote';
  //   }
  // using ternary operator for above logic: **if/else on one line**
  // e.g. <div className={`main-class ${this.state.isSelected ? 'selected’:’not-selected’ }`}></div> 

  const returnedvalue = props.sender === 'Vladimir' ? 'local' : 'remote';

  
  return (
    <div className={`chat-entry ${returnedvalue}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        {/* <p></p> */}
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={() => props.onLikeEntry(props.id)}>
          {likeClass}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onLikeEntry: PropTypes.func,
  // font color
};

export default ChatEntry;
