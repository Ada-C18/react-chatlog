import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

function ChatLog({ entries, updateLikes }) {
  const ChatEntryComponenet = entries.map((entry) => {
    return (
      <ChatEntry 
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked= {entry.liked}
        updateLikes={updateLikes}
      />
    );
  });

  return(
    <>{ChatEntryComponenet}</>
  ) 
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  updateLikes: PropTypes.func.isRequired,
};

export default ChatLog;
