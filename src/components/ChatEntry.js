import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const onLikeButtonClick = () => {
    const updateChatEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdateLiked(updateChatEntry);
  };

  const heart = props.liked ? '❤️' : '🤍';
  
  const alignment =
    props.sender === 'Vladimir'
      ? 'chat-entry local left'
      : 'chat-entry local right';
  const bubbleAlign =
    props.sender === 'Vladimir' ? 'entry-bubble left' : 'entry-bubble right';

  return (
    <div className={alignment}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className={bubbleAlign}>
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={onLikeButtonClick}>
          {heart}
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
  liked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
