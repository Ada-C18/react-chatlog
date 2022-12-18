import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return (
    <div id="chatLog">
      {props.entries.map((entry) => {
        return <ChatEntry key={entry.id} {...entry} />;
      })}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.instanceOf(Date).isRequired,
      //liked:PropTypes.bool,
    })
  ).isRequired,
};
export default ChatLog;
