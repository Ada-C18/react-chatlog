import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const body = props.body;
  const sender = props.sender;
  const timeStamp = props.timeStamp;
  const localOrRemote = props.id % 2 === 1 ? 'local' : 'remote';

  const [like, setLike] = useState(props.liked);
  let [count, setCount] = useState(0);
  const clickHeart = (id) => {
    console.log(`it is cliked`);
    console.log(id);
    // props.updateLikes(id);
    setLike(!like);
  };
  const HeartColorChange = like ? '❤️' : '🤍';
  const addLike = (inc) => {
    console.log(`add function work`);
    if (inc && !like) {
      count++;
    }
    setCount(count);
  };

  return (
    <div className={`chat-entry ${localOrRemote}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp timeStamp={timeStamp}></TimeStamp>
        </p>
        <button
          className="like"
          onClick={() => {
            clickHeart(props.id);
            addLike(true);
          }}
        >
          <span>{count}</span>
          {HeartColorChange}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  ChatEntry: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  // updateLikes: PropTypes.func.isRequired,
};

export default ChatEntry;
