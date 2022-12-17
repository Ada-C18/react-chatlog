import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

// #heartWidget
const ChatEntry = ({ id, sender, body, timeStamp, liked, onToggleHeart }) => {
  // const whiteHeart = '🤍';
  // const redHeart = '❤️';

  // const handleToggleHeart = () => {
  //   onToggleHeart(id);
  // };

  // jaime version
  const heartButton = liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button
          onClick={() => {
            onToggleHeart(id);
          }}
          className="like"
        >
          {heartButton}
        </button>
        {/* jaime version  above*/}
        {/* <button onClick={handleToggleHeart} className="like">
          {liked ? redHeart : whiteHeart}
        </button> */}
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
      onToggleHeart: PropTypes.func.isRequired,
    })
  ),
};

// ChatEntry.propTypes = {
//   key: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
//   sender: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   timeStamp: PropTypes.string.isRequired,
//   liked: PropTypes.bool.isRequired,
// };

export default ChatEntry;
