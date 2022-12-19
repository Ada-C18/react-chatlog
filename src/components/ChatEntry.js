import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const chatId = props.id;
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const liked = props.liked;
  const changeLike = props.changeLike;

  // change date to years ago
  const yearsAgo = yearconvert(timeStamp);
  const timeStampStr = `${yearsAgo} years ago`;

  //const flipliked = changeLike(liked);
  function flipLike(arg) {
    changeLike(chatId, !arg);
  }
  const heart = like(liked);

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStampStr}</p>
        <button
          className="like"
          onClick={() => {
            flipLike(liked);
          }}
        >
          {heart}
        </button>
      </section>
    </div>
  );
};

const yearconvert = (timeStamp) => {
  const today = new Date();
  const ddToday = today.getDate();
  const mmToday = today.getMonth() + 1;
  const yyyyToday = today.getFullYear();
  const yeardate = timeStamp.split('-');
  const yyyy = parseInt(yeardate[0]);
  const mm = parseInt(yeardate[1]);
  const datetime = yeardate[2].split('T');
  const dd = parseInt(datetime[0]);
  let yearsAgo = yyyyToday - yyyy;
  if (mmToday - mm < 0) {
    // when the month is earlier than current month, it's not full years
    yearsAgo = yearsAgo - 1;
  } else if (mmToday - mm === 0) {
    if (ddToday - dd < 0) {
      yearsAgo = yearsAgo - 1;
    }
  }
  return yearsAgo;
};

const like = (liked) => {
  let heart = '🤍';
  if (liked === true) {
    heart = '❤️';
  }
  return heart;
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  changeLike: PropTypes.func.isRequired,
};

export default ChatEntry;
