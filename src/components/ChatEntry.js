import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChatEntry = (props) => {
  const timeToDisplay = (time) => <TimeStamp time={time}></TimeStamp>;

  const localOrRemoteClass =
    props.id % 2 === 1 ? 'chat-entry local' : 'chat-entry remote';

  const [like, setLike] = useState(false);

  const likeButton = like ? '❤️' : '🤍';

  return (
    <div className={localOrRemoteClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{timeToDisplay(props.timeStamp)}</p>
        <button className="like" onClick={() => setLike(!like)}>
          {likeButton}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
