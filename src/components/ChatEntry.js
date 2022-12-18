import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, updateLiked }) => {
  const buttonStyle = liked ? '❤️' : '🤍';

  return (
    <div className={`chat-entry ${sender === 'Vladimir' ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={() => updateLiked(id)}>
          {buttonStyle}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // timeStamp: PropTypes.instanceOf(DateTime), pass as a string
  // liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
