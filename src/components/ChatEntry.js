import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const id = props.id;
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const liked = props.liked;
  const updateLiked = props.updateLiked;
  const display = sender === 'Vladimir' ? 'local' : 'remote';
  const heart = liked === true ? '❤️' : '🤍';

  const handleLiked = () => {
    updateLiked(id);
  };

  return (
    <div className={`chat-entry ${display}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStamp}</p>
        <button className="like" on-onClick={handleLiked}>
          {heart}
        </button>
      </section>
    </div>
  );
};

// ChatEntry.propTypes = {
//   //Fill with correct proptypes
//   id: PropTypes.number.isRequired,
//   sender: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   timeStamp: PropTypes.string,
//   liked: PropTypes.bool,
// };

export default ChatEntry;
