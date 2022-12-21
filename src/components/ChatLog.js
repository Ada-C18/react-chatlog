import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatEntry.css';

const ChatLog = (props) => {
  // console.log(props.entries);
  const chatLog = props.entries;
  const chatComponents = chatLog.map((entry, i) => {
    return (
      <ChatEntry
        key={i}
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
      key: PropTypes.number,
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  updateLiked: PropTypes.func,
};

export default ChatLog;
