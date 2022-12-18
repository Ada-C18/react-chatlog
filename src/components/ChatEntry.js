import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const heartButton = props.liked ? '❤️' : '🤍';
  const LocalRemote =
    props.id % 2 === 0 ? 'chat-entry local' : 'chat-entry remote';
    // className={`tasks__item__toggle ${buttonClass}`}

  return (
    <div className={`${LocalRemote}`} id={props.id}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>

        <TimeStamp className="entry-time" time={props.timeStamp} />

        {/* need to import toggleheart function */}
        <button
          className="like"
          onClick={() => {
            props.toggleHeart(props.id);
          }}
        >
          {heartButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      toggleHeart: PropTypes.func.isRequired,
    })
  ),
};
export default ChatEntry;
