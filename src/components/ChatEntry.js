import React from 'react';
import { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const time = <TimeStamp timeStamp={props.timeStamp} />;
  const nameLocalRemote = props.sender === 'Vladimir' ? 'local' : 'remote';

  const classes = `chat-entry ${nameLocalRemote}`;

  // Source: https://stackoverflow.com/questions/34521797/how-to-add-multiple-classes-to-a-reactjs-component
  //Wave 3
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
    props.updateLike(props.id);
  };
  const likeColor = like === true ? '❤️' : '🤍';

  return (
    <div className={classes}>
      <h2 className="entry-name">
        {props.liked}
        {props.sender}
      </h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{time}</p>
        <button className="like" onClick={toggleLike}>
          {likeColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLike: PropTypes.func.isRequired,
};

export default ChatEntry;
