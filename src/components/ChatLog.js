import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatEntry.css';

const ChatLog = (props) => {
  // console.log(props.entries);
  const chatLog = props.entries;
  const chatComponents = chatLog.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLiked={props.updateLiked}
      ></ChatEntry>
    );
  });
  return <div>{chatComponents}</div>;
};

ChatLog.propTypes = {
  chatLog: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  updateLiked: PropTypes.func.isRequired,
};

export default ChatLog;
