import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({ id, sender, body, timeStamp, liked, updateLikes }) => {
  const updateMessage = () => {
    updateLikes({
    
      id,
      sender,
      body,
      timeStamp,
      liked: !liked,
    });
  };
  const comparePosition = id % 2 ? 'local' : 'remote';
  return (
    <div className={`chat-entry ${comparePosition}`}>
      <h2 className="entry-name"> {sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={updateMessage}>
          {liked ? '❤️': '🤍' }
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default ChatEntry;
