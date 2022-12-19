import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';;

const ChatLog = (props) => {
  return (
    <div className="chat-log">
      {props.entries.map((entry, index) => {
        return (
          <ChatEntry
            chatPosition={index % 2 === 0 ? 'local' : 'remote'}
            sender={entry.sender}
            body={entry.body}
            timeStamp={entry.timeStamp}
            id = {entry.id}
            liked = {entry.liked}
            toggleheart ={props.toggleheart}

          />
        );
      })}
    </div>
  );
};
ChatLog.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  timeStamp: PropTypes.string.isRequired,
  toggleheart: PropTypes.func.isRequired,
};

export default ChatLog;
