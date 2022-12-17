import ChatEntry from './components/ChatEntry';
import PropTypes from 'prop-types';
// import './ChatLog.css';

const ChatLog = (props) => (
  <ul>
    {props.entries.map((entry, id) => (
      <li key={id}>
        <ChatEntry
          sender={props.sender}
          body={props.body}
          timeStamp={props.timeStamp}
          liked={props.liked}
        />
      </li>
    ))}
  </ul>
);

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      // liked: PropTypes.bool,
    })
  ),
};

export default ChatLog;
