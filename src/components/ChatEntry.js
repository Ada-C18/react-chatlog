import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const timeToDisplay = (time) => <TimeStamp time={time}></TimeStamp>;

  const localOrRemoteClass =
    props.id % 2 === 1 ? 'chat-entry local' : 'chat-entry remote';

  const likeButton = props.liked ? '❤️' : '🤍';

  const onLikeButtonLike = () => {
    const updatedChatEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.updateLiked(updatedChatEntry);
  };

  return (
    <div className={localOrRemoteClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{timeToDisplay(props.timeStamp)}</p>
        <button className="like" onClick={onLikeButtonLike}>
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
  liked: PropTypes.bool,
};

export default ChatEntry;
