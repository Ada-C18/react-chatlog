import './ChatEntry.css';
import PropTypes from 'prop-types';
import React from 'react';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [likedState, setLikedState] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const changeLike = props.liked ? '❤️' : '🤍';

  const onButtonClick = () => {
    liked: !props.liked,
  };
  // const toggleLikedState = () => {
  //   if (likedState === '🤍') {
  //     setLikedState('❤️');
  //     setLikeCount(likeCount + 1);
  //   } else {
  //     setLikedState('🤍');
  //     setLikeCount(likeCount - 1);
  //   }
  //   console.log(likeCount);
  // };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={() => props.setUpdateLikes()}>
          {changeLike}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  likeCount: PropTypes.number,
  liked: PropTypes.bool,
};

export default ChatEntry;
