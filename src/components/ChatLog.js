import ChatEntry from '../components/ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {

  const fullChatLog = props.entries.map((entry, index) => {
    return (
      <li key={index}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onHandleLikes={props.onUpdateLikes}
        ></ChatEntry>
      </li> 
      )
    });

  return (
    <div className="fullChatLog">
      {fullChatLog}
    </div>
  )
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    body: PropTypes.string,
    timeStamp: PropTypes.string,
    liked: PropTypes.bool
  })),
  onUpdateLikes: PropTypes.func
};

export default ChatLog;